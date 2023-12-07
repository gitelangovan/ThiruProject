import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.scss']
})
export class InvoicePageComponent {

  invoiceForm!: FormGroup;
  chemicalArray!: FormArray;
  submitControl: boolean=false;
  addChecmicalArr: any;
  removeArr: any;
  deletedArr: any=[];

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.invoiceForm = this.formBuilder.group({
      invoiceArray: this.formBuilder.array([this.invFormGroup()])
    });
  }

  invFormGroup(): FormGroup{
    return new FormGroup({
      cusName: new FormControl('', Validators.required),
      phoneNo: new FormControl('', Validators.required),
      gstNo: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      billNo: new FormControl('', Validators.required),
      billDate: new FormControl('', Validators.required),
      cgstValue: new FormControl('', Validators.required),
      sgstValue: new FormControl('', Validators.required),
      igstValue: new FormControl('', Validators.required),
      rdfValue: new FormControl('', Validators.required),
      totalValue: new FormControl('', Validators.required),
      
      // childFormArray
      chemicalArray: this.formBuilder.array([this.chemicalFormGroup()])
    })
  }

  chemicalFormGroup(){
    return this.formBuilder.group({
      chemicalValue: new FormControl('', Validators.required),
      hsnValue: new FormControl('', Validators.required),
      qtyValue: new FormControl('', Validators.required),
      rateValue: new FormControl('', Validators.required),
      amountValue: new FormControl('', Validators.required),
      arrId: new FormControl(''),
      arrStatus: new FormControl('A')
    })
  }

  parentControl(): AbstractControl[] {
    return(<FormArray>this.invoiceForm.get('invoiceArray')).controls;
  }

  // Child formArray
  chemicalDetailsArr(form:any) {
    return form.controls.chemicalArray?.controls;
  }

  // Add multiple chemical details
  addChemic(form:any){
    this.addChecmicalArr = form.controls.chemicalArray as FormArray;
    this.addChecmicalArr.push(this.chemicalFormGroup());
  }

  removeChemic(form:any,i:any){
    debugger
    this.removeArr = form.controls.chemicalArray as FormArray;
    // if(this.removeArr.value[i].arrId != undefined && this.removeArr.value[i].arrId != null && this.removeArr.value[i].arrId !=""){
      this.removeArr.value[i].arrStatus = "R";
      this.deletedArr.push(this.removeArr.value[i]);
      this.removeArr.removeAt(i);
    // }
  }

  submitForm(){
    if(this.invoiceForm.invalid){
      this.submitControl=true;
    }
  }
}
