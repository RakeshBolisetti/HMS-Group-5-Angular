import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../Srvices/patient.service';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.css']
})
export class PhysicianComponent implements OnInit {
  physicianData: any[] = [];
  filteredNurses: any[] = [];
  search: any = {};
  sort: any = { key: '', reverse: false };
  columns: string[] = [
    'Employee ID',
    'Name',
    'Position',
    'SSN',
    'Email Address',
    'Password',
    'CreatedOn',
  ];

  constructor(private _service:PatientService) {}

  ngOnInit(): void {
    this.fetchPhysicians();
  }

  fetchPhysicians() {
    this._service.fetchPhysicians().subscribe((data: any) => {
        this.physicianData = data;
      });
  }

  sortTable(key: string) {
    this.sort.key = key;
    this.sort.reverse = !this.sort.reverse;
  }

  getFilterKeys() {
    return Object.keys(this.search);
  }

  filterPhysicians() {
    const { employeeid, name, position, ssn } = this.search;
    this.physicianData = this.physicianData.filter((d) => {
      return (
        (!employeeid ||
          d.employeeid
            .toString()
            .toLowerCase()
            .includes(employeeid.toLowerCase())) &&
        (!name || d.name.toLowerCase().includes(name.toLowerCase())) &&
        (!position ||
          d.position
            .toString() 
            .toLowerCase()
            .includes(position.toLowerCase())) &&
        (!ssn || d.ssn.toString().toLowerCase().includes(ssn.toLowerCase())) 
        
      );
    });
  }

  onSearch() {
    this.filterPhysicians();
  }

  onReset() {
    this.search = {};
    this.fetchPhysicians();
  }

}
