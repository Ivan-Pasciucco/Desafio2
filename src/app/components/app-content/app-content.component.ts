import { Component } from '@angular/core';
import { Alumno } from '../directives/interfaces/Alumno';


@Component({
  selector: 'app-app-content',
  standalone: false,
  templateUrl: './app-content.component.html',
  styleUrl: './app-content.component.css'
})
export class AppContentComponent {
  public nuevoAlumno: Alumno = this.getEmptyAlumno();

  public Alumnos: Alumno[] = [
  ];
  constructor() { }
  private resetForm(): void {
    this.nuevoAlumno = {
      firstName: '',
      lastName: '',
      fullName: '',
      dni: 0,
      age: 0,
      course: '',
      isActive: false,
      photo: 'https://picsum.photos/200/300',
    };
  }
  private getEmptyAlumno(): Alumno {
    return {
      firstName: '',
      lastName: '',
      fullName: '',
      dni: 0,
      age: 0,
      course: '',
      isActive: false,
      photo: 'https://picsum.photos/200/300',
    };
  }

  showData(): void {
    console.log(this.Alumnos);
  }

  clearData(): void {
    this.Alumnos = [];
    this.resetForm();
  }

  addAlumno(): void {
    if (!this.nuevoAlumno.firstName || !this.nuevoAlumno.lastName || !this.nuevoAlumno.course) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }
    this.nuevoAlumno.fullName = `${this.nuevoAlumno.firstName} ${this.nuevoAlumno.lastName}`;
    this.Alumnos.push({ ...this.nuevoAlumno });
    this.resetForm();
  }

}

