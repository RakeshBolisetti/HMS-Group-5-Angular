import { Component } from '@angular/core';
import { DepartmentService } from '../../Srvices/department.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {

  name:string=''
  head:string=''
  namechk:boolean = false
  headchk:boolean = false;
  d:number=0

  departments: any[] = [];
  departmentForm!: FormGroup;

  constructor(private departmentService: DepartmentService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.departmentForm = this.formBuilder.group({
      headId: ['', Validators.required],
      departmentName: ['', Validators.required]
      // Add more form controls as needed
    });
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(
      (data) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );
  }

  updateHead(departmentId: number) {
    // console.log(this.d)
    this.d = departmentId
    // console.log(this.d)
    this.headchk = !this.headchk
    // console.log(this.headchk)
    // console.log(this.headchk && 12==departmentId)
    if(!this.headchk){
    // console.log(departmentId,this.head);
    this.departmentService.updateHead(departmentId, +this.head).subscribe(
      (response) => {
        console.log('Head updated successfully:', response);
        this.loadDepartments(); // Refresh the department list after update
      },
      (error) => {
        console.error('Error updating head:', error);
      }
    );
    this.headchk=false
    this.d=0
    }
  }

  updateDepartmentName(departmentId: number) {
    this.namechk = !this.namechk
    this.d = departmentId
    if(!this.namechk){
    this.departmentService.updateDepartmentName(departmentId, this.name).subscribe(
      (response) => {
        console.log('Department name updated successfully:', response);
        this.loadDepartments(); // Refresh the department list after update
      },
      (error) => {
        console.error('Error updating department name:', error);
      }
    );
    this.namechk = false
    this.d=0
    }
  }

  addDepartment() {
    if (this.departmentForm.valid) {
      const newDepartment = this.departmentForm.value;
      console.log(newDepartment)
  let    department ={head:newDepartment.headId,name:newDepartment.departmentName} 
  console.log(department)
      this.departmentService.addDepartment(department).subscribe(
        (response) => {
          console.log('Department added successfully:', response);
          this.loadDepartments(); // Refresh the department list after addition
          this.departmentForm.reset(); // Reset the form after successful addition
        },
        (error) => {
          console.error('Error adding department:', error);
        }
      );
    }
  }

}
