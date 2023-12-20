import { Component } from '@angular/core';
import { PatientService } from '../../Srvices/patient.service';

declare const bootstrap: any;
@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent {
  proceduresData: any[] = [];
  jsontest: any[] = [];
  filteredNurses: any[] = [];
  search: any = {};
  modal: any ={title:"", content: ""};
  sort: any = { key: '', reverse: false };
  columns: string[] = ['Code', 'Name', 'Cost'];

  constructor(private _service:PatientService) {}

  ngOnInit(): void {
    this.fetchProcedures();
  }

  showModal() {
    const myModal = document.getElementById('exampleModal');
    const modal = new bootstrap.Modal(myModal);
    modal.show();
  }

  setModalData(title: string, body: string){
    this.modal['title'] = title;
    this.modal['content'] = body;
    this.showModal();
  }

  fetchProcedures() {
    this._service.fetchProcedures()
      .subscribe((data: any) => {
        this.proceduresData = data;
      });
  }

  sortTable(key: string) {
    this.sort.key = key;
    this.sort.reverse = !this.sort.reverse;
  }

  getFilterKeys() {
    return Object.keys(this.search);
  }

  filterProcedures() {
    const { code, name } = this.search;
    this.proceduresData = this.proceduresData.filter((d) => {
      return (
        (!code ||
          d.code.toString().toLowerCase().includes(code.toLowerCase())) &&
        (!name || d.name.toLowerCase().includes(name.toLowerCase()))
      );
    });
  }

  onSearch() {
    this.filterProcedures();
  }

  onReset() {
    this.search = {};
    this.fetchProcedures();
  }

}
