import { Router } from '@angular/router';
import { environment } from '@/environments/environment';
import { validationMessage } from '@/types/general.types';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent {

  public formContact: FormGroup;
  public sending = false
  public validations = [
    {
      input: 'name',
      validations: [{
        key: 'required',
        message: 'VALIDATIONS.NOMBRE_REQUERIDO'
      }]
    },
    {
      input: 'email',
      validations: [
        {
          key: 'required',
          message: 'VALIDATIONS.EMAIL_REQUERIDO'
        },
        {
          key: 'pattern',
          message: 'VALIDATIONS.EMAIL_INVALIDO'
        },
      ]
    },
    {
      input: 'message',
      validations: [
        {
          key: 'required',
          message: 'VALIDATIONS.MENSAJE_REQUERIDO'
        },
        {
          key: 'minlength',
          message: 'VALIDATIONS.MENSAJE_LONGITUD_MINIMA'
        },
        {
          key: 'maxlength',
          message: 'VALIDATIONS.MENSAJE_LONGITUD_MAXIMA'
        }
      ]
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: string
  ) {
    this.formContact = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(500)]],
    });
  }

  inputValidate(key: string): validationMessage[] {
    const listValidationes = this.validations.find(i => i.input === key)
    if (listValidationes) {
      return listValidationes.validations
    }
    return []
  }

  get form() {
    return this.formContact.controls;
  }

  sendMessage() {
    this.sending = true
    if (this.formContact.invalid) {
      this.form['name'].markAsDirty()
      this.form['email'].markAsDirty()
      this.form['message'].markAsDirty()
      this.sending = false
      return
    }
      emailjs.send(environment.serviceMailID, environment.templateMailID, this.formContact.value, environment.publicKeyMailID)
        .then(() => {
          this.sending = false
          this.router.navigate(['success'])
        }, (err) => {
          console.log('error, recuerda crear tu cuenta en EmailJs. En el Readme.md de este proyecto esta como realizar la instación  ')
          console.log('error ==>', err)
          this.sending = false
        });
  }
}
