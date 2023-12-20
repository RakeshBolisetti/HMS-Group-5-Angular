import { Component, OnInit } from '@angular/core';
import { PhysicianService } from 'src/app/Services/physician.service';

@Component({
  selector: 'app-physicians',
  templateUrl: './physicians.component.html',
  styleUrls: ['./physicians.component.css']
})
export class PhysiciansComponent implements OnInit{
  physicians:any[]=[];
  searchTerm:string = '';
  physiciansFilter:any[]=[];
  found:boolean = false;
  physicianName:string='';
  physicianId:number=0;
  position:string=''
  constructor(private physicianService:PhysicianService){}
  ngOnInit(): void {

    this.getAllPhysician()


    
  }
  getAllPhysician():void{
    this.physicianService.getAllPhysicians().subscribe(res=>{
        this.physiciansFilter =   this.physicians = res;
        console.log(res);
    },
   err=> alert("some error occurred"))
  }
  reset():void{
   
      this.physiciansFilter = this.physicians;
      this.physicianId = 0;
      this.physicianName = '';
      this.position ='';

    
  }

  // search():void{
  //  this.physicianService.getPhysicianByName(this.searchTerm).subscribe(res=>{
  //   this.physiciansFilter = res;
  //   if(this.searchTerm===''){
  //     this.physiciansFilter = this.physicians;
  //   }
  //   if(this.physiciansFilter.length==0){
  //     this.found=true;
  //   }
  //   else{
  //     this.found = false;
  //   }
  //  },err=>this.found=true);
  // }
  search():void{
    
   
    this.physiciansFilter = this.physiciansFilter.filter( (p) =>{
      // console.log('hii')
      let name = p.name.toLowerCase();
      let pName = this.physicianName.toLocaleLowerCase();
      let pos = p.position.toLowerCase();
      let pPos = this.position.toLowerCase(); 
      // console.log(( (name.indexOf(pName)>=0 && pName!=='')||
      // p.employeeid==this.physicianId ||
      // (pos.indexOf(pPos)>=0 && pos!=='')
      // ));
  
      return ( (name.indexOf(pName)>=0 && pName!=='')||
      p.employeeid==+this.physicianId ||
      (pos.indexOf(pPos)>=0 && pPos!='')
      );
    });
  

 

}
}