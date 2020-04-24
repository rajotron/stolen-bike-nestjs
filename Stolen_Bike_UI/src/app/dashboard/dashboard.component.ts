import { Component, OnInit ,Inject, ViewChild,ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import { ApisService } from '../services/api.service';
import {NgForm} from '@angular/forms';
import { NotifyService } from '../services/notify.service';
import { MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { MatSort} from '@angular/material/sort';
import {Sort} from '@angular/material/sort';
/*import {MatDialog, MatDialogConfig} from "@angular/material";
*/import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   @ViewChild(MatSort,{static: false}) sort: MatSort;

   displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
   displayedColumns1: string[] = [];
  dataSource1: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private dialog: MatDialog,private router: Router, private notify:NotifyService,private _api:ApisService,public cdr: ChangeDetectorRef) { }

  username:any;


  ngOnInit() {
  	 this.username = localStorage.getItem('username');
  	 this.getStolenBikes();
     this.getPoliceOfficers();
  }

  getStolenBikes(){
  
   this._api.getStolenBikes().subscribe((res: any) => {
        //this.result=res;
         
        	console.log("Details --",res);
                    var columnsOfData=Object.keys(res[0]);
                    columnsOfData.push('Action');
                    /*columnsOfData.push('View Assets');*/

                    this.displayedColumns = columnsOfData;
                    console.log("Columns - ",this.displayedColumns)
          this.dataSource.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
        setTimeout(() => this.dataSource.sort = this.sort);
        this.dataSource.data = res;
        this.cdr.detectChanges();
          /*this.notify.success("Success - ",res.message);
          localStorage.setItem('username',res.data[0].username);
          localStorage.setItem('token',res.data[0].token);
          this.router.navigateByUrl('/dashboard');*/

          console.log("shopping centre details fetched successfully");
        
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });
}
getPoliceOfficers(){
  
   this._api.getPoliceOfficers().subscribe((res: any) => {
        //this.result=res;
         
          console.log("Details --",res);
                    var columnsOfData=Object.keys(res[0]);
                    columnsOfData.push('Action');
                    /*columnsOfData.push('View Assets');*/

                    this.displayedColumns1 = columnsOfData;
                    console.log("Columns - ",this.displayedColumns1)
          this.dataSource1.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
        setTimeout(() => this.dataSource1.sort = this.sort);
        this.dataSource1.data = res;
        this.cdr.detectChanges();
          /*this.notify.success("Success - ",res.message);
          localStorage.setItem('username',res.data[0].username);
          localStorage.setItem('token',res.data[0].token);
          this.router.navigateByUrl('/dashboard');*/

          console.log("shopping centre details fetched successfully");
        
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });
}

 getProperty = (obj, path) => (
  path.split('.').reduce((o, p) => o && o[p], obj)
)



 openDialog(row): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '100%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getStolenBikes();
       this.getPoliceOfficers();
    });
  }
  openDialog4(row): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog4, {
      width: '100%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getStolenBikes();
       this.getPoliceOfficers();
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog2, {
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
   openDialog3(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog3, {
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    this.getStolenBikes();
      this.getPoliceOfficers();
    });
  }
 /*edit(row){
   console.log("Row --- ",row);
 }*/

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog1.html',
})
export class DialogOverviewExampleDialog {

  constructor(private dialog: MatDialog,private router: Router, private notify:NotifyService,private _api:ApisService,public cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  update(){
    console.log("Data -------------------- ",this.data);
    var objToUpdate:any = this.data;
    var id = objToUpdate.id
    delete objToUpdate.id;

this._api.updateStolenBikes(id,objToUpdate).subscribe((res: any) => {
        //this.result=res;
         
      this.notify.success("Success - ","Info updated successfully");

        this.dialogRef.close();
      },
          err => {
            this.notify.error("Error - ","server not responding");
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });




  }

}


@Component({
  selector: 'dialog-overview-example-dialog2',
  templateUrl: 'dialog2.html',
})
export class DialogOverviewExampleDialog2 {


  constructor(private router: Router, private notify:NotifyService,private _api:ApisService,public cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog2>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

   currentDate = new Date();
  data:any ;


 ngOnInit(){
   this.data= {
  "vehicle_number": "",
  "nameofowner": "",
  "brandofbike": "",
  "modelno": "",
  "when": this.currentDate,
  "insurance_company": "",
  "driving_license": "",
  "contactinfo": "",
  "dateOfPurchase": this.currentDate,
  "registrationno": "",
  "fromWhere": ""
}
  }
 

  createBikeCase(){
    console.log("Data -------------------- ",this.data);
this._api.createStolenBikes(this.data).subscribe((res: any) => {
        //this.result=res;
         
       this.notify.success("Success - ","Case added successfuly");

        this.dialogRef.close();
      },
          err => {
            this.notify.error("Error - ","server is not responding");
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });




  }

   getProperty = (obj, path) => (
  path.split('.').reduce((o, p) => o && o[p], obj)
)


}


@Component({
  selector: 'dialog-overview-example-dialog3',
  templateUrl: 'dialog3.html',
})
export class DialogOverviewExampleDialog3 {

  constructor(private dialog: MatDialog,private router: Router, private notify:NotifyService,private _api:ApisService,public cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog3>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  data:any = {
    name:"",
    status:"IDLE",
    currentCaseId:0
  }


  createNewPoliceOfficer(){
    console.log("Data -------------------- ",this.data);
this._api.createPoliceOfficers(this.data).subscribe((res: any) => {
        //this.result=res;
         
        this.notify.success("Success - ",`New Police Officer Added successfully`);

        this.dialogRef.close();
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });




  }

}

@Component({
  selector: 'dialog-overview-example-dialog4',
  templateUrl: 'dialog4.html',
})
export class DialogOverviewExampleDialog4 {

   constructor(private dialog: MatDialog,private router: Router, private notify:NotifyService,private _api:ApisService,public cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog4>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  update(){
    console.log("Data -------------------- ",this.data);
    var objToUpdate:any = this.data;
    var id = objToUpdate.id
    delete objToUpdate.id;

this._api.updatePoliceOfficers(id,objToUpdate).subscribe((res: any) => {
        //this.result=res;
         
        this.notify.success("Success - ","Info updated successfully");

        this.dialogRef.close();
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });




  }

}