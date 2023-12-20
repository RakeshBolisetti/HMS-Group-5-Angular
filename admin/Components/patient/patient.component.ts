import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../Srvices/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent  implements OnInit{
  patients: any[] = [];
  filteredPatients: any[] = [];
  search: any = {};

  constructor(private _service:PatientService) {}

  ngOnInit() {
    this.fetchPatients();
  }
  
  fetchPatients(): void{
    this._service.fetchPatients().subscribe((data: any) => {
      this.patients = data;
      this.filteredPatients = data;
    });
  }

  sort(field: string) {
    this.patients.sort((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });
    this.filteredPatients = [...this.patients];
  }

  filter() {
    this.filteredPatients = this.patients.filter((patient) => {
      return Object.keys(this.search).every((key) => {
        const patientValue = patient[key] ? patient[key].toString().toLowerCase() : '';
        const searchValue = this.search[key] ? this.search[key].toString().toLowerCase() : '';
        return patientValue.includes(searchValue);
      });
    });
  }

  onSearch() {
    this.filter();
  }

  onReset() {
    this.search = {};
    this.fetchPatients();
  }

}
