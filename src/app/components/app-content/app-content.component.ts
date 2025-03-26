import { Component } from '@angular/core';
import { Alumno } from '../directives/interfaces/Alumno';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-app-content',
  standalone: false,
  templateUrl: './app-content.component.html',
  styleUrl: './app-content.component.css'
})
export class AppContentComponent {

  public nuevoAlumno: Alumno = {
    firstName: '',
    lastName: '',
    fullName: '',
    dni: 0,
    age: 0,
    course: '',
    isActive: false,
    photo: '',
  };


  public Alumnos: Alumno[] = [
    {
      firstName: 'Juan',
      lastName: 'Perez',
      fullName: 'Juan Perez',
      dni: 12345678,
      age: 25,
      course: 'Angular',
      isActive: false,
      photo: '',
    }
  ];

  showData(): void {
    console.log(this.Alumnos);
  }

  clearData(): void {
    this.Alumnos = [];
  }

  addAlumno(): void {
    this.nuevoAlumno.fullName = `${this.nuevoAlumno.firstName} ${this.nuevoAlumno.lastName}`;
    this.Alumnos.push({ ...this.nuevoAlumno });

    // Limpiar el formulario
    this.nuevoAlumno = {
      firstName: '',
      lastName: '',
      fullName: '',
      dni: 0,
      age: 0,
      course: '',
      isActive: false,
      photo: '',
    };
  }


}

