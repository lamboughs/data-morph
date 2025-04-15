import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicForm, FormField } from '../../models/form.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-source-object',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './source-object.component.html',
  styleUrl: './source-object.component.css'
})
export class SourceObjectComponent {
  sourceObjectForm = new FormGroup({
    sourceObject: new FormControl('', {validators: [Validators.required]})
  });

  formStructure?: DynamicForm;

  generateForm(): void {
    /* if(!this.sourceObjectForm.valid) {
      console.log("Error generating form");
      return;
    } */
   this.sourceObjectForm.value.sourceObject = `{
  "name": "John Doe",
  "age": 30,
  "phone": "+1 (987) 345-1098",
  "email": "alex.b@somedomain.com"
}`;

    try {
      const data = JSON.parse(this.sourceObjectForm.value.sourceObject!);
      
      this.formStructure = {
        id: "tmp-form-123",
        fields: this.getFormFieldsFromSourceObject(data)
      };
    } catch (error) {
      console.warn("Could not generate form: ", error);
    }
  }

  private getFormFieldsFromSourceObject(data: object): FormField[] {
    const fields: FormField[] = []; 
    Object.entries(data).forEach(([key, value], i) => {
      fields.push({
        id: `form-field-${i}`,
        label: key,
        type: typeof value,
      })
    });

    return fields;
  }
}
