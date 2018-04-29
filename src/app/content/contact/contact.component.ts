import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { AbstractExtendedWebDriver } from 'protractor/built/browser';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-pikbik-contact',
    templateUrl: './contact.component.html'
})
export class PikbikContactComponent implements OnInit {
    form: FormGroup;
    formErrors: any;
    checkPiker = false;
    checkBiker = false;
    tipo_contact = 0;

    constructor(
        private formBuilder: FormBuilder,
        private mailService: MailService
    ) {
        this.formErrors = {
            nombre: {},
            correo: {},
            telefono: {}
        };
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            nombre      : ['', Validators.required],
            correo      : ['', [Validators.required, Validators.email]],
            telefono    : ['', Validators.required],
            comentario  : ['']
        });

        this.form.valueChanges.subscribe(() => {
            this.onFormValuesChanged();
        });
    }

    checkChange(check_id) {
        switch (check_id) {
            case 1:
                this.checkPiker = true;
                this.checkBiker = false;
                break;
            case 2:
                this.checkPiker = false;
                this.checkBiker = true;
                break;
        }
        this.tipo_contact = check_id;
    }

    enviarCorreoElectronico() {
        const mail = this.form.value;
        mail['tipo'] = this.tipo_contact;
        console.log(mail);
        this.mailService.postCourseUpdate(mail).subscribe(
            succes => {
                console.log(succes);
                Swal({
                    title: 'Envío de correo electrónico exitoso',
                    text: 'Revisa tu bandeja de entrada para más información.',
                    type: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Continuar',
                }).then((resultAcept) => {
                    this.form = this.formBuilder.group({
                        nombre: ['', Validators.required],
                        correo: ['', [Validators.required, Validators.email]],
                        telefono: ['', Validators.required],
                        comentario: ['']
                    });
                    this.checkPiker = false;
                    this.checkBiker = false;
                });
            }, err => {
                Swal({
                    title: 'Envio de correo electrónico',
                    text: 'Ups, sucedio un problema, vuelve a intentarlo.',
                    type: 'info',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Continuar',
                }).then((resultAcept) => {
                });
            }
        );
    }

    onFormValuesChanged() {
        for (const field in this.formErrors) {
            if (!this.formErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.formErrors[field] = {};

            // Get the control
            const control = this.form.get(field);

            if (control && control.dirty && !control.valid) {
                this.formErrors[field] = control.errors;
            }
        }
    }
}
