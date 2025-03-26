// import { Component } from '@angular/core';
// import { Alumno } from './interfaces/Alumno';

// @Component({
//   selector: 'app-directives',
//   standalone: false,
//   templateUrl: './directives.component.html',
//   styleUrl: './directives.component.css'
// })
// export class DirectivesComponent {
//   /**
//    *
//    *
//    * @type {Alumno[]}
//    * @memberof DirectivesComponent
//    */

//   public nuevoAlumno: Alumno = {
//     firstName: '',
//     lastName: '',
//     fullName: '',
//     dni: 0,
//     age: 0,
//     course: '',
//     isActive: false,
//     photo: '',
//   };


//   public Alumnos: Alumno[] = [
//     // {
//     //   firstName: 'Juan',
//     //   lastName: 'Perez',
//     //   fullName: 'Juan Perez',
//     //   dni: 12345678,
//     //   age: 25,
//     //   course: 'Angular',
//     //   isActive: false,
//     //   photo: '',
//     // },
//     // {
//     //   firstName: 'Maria',
//     //   lastName: 'Gomez',
//     //   fullName: 'Maria Gomez',
//     //   dni: 87654321,
//     //   age: 30,
//     //   course: 'React',
//     //   isActive: false,
//     //   photo: '',
//     // },
//     // {
//     //   firstName: 'Pedro',
//     //   lastName: 'Gonzalez',
//     //   fullName: 'Pedro Gonzalez',
//     //   dni: 45678912,
//     //   age: 22,
//     //   course: 'Vue',
//     //   isActive: true,
//     //   photo: '',
//     // },
//     // {
//     //   firstName: 'Lucia',
//     //   lastName: 'Lopez',
//     //   fullName: 'Lucia Lopez',
//     //   dni: 98765432,
//     //   age: 28,
//     //   course: 'Angular',
//     //   isActive: false,
//     //   photo: '',
//     // },
//     // {
//     //   firstName: 'Carlos',
//     //   lastName: 'Rodriguez',
//     //   fullName: 'Carlos Rodriguez',
//     //   dni: 65432198,
//     //   age: 35,
//     //   course: 'React',
//     //   isActive: true,
//     //   photo: '',
//     // }
//   ];

//   showData(): void {
//     // console.log(this.Alumnos);
//   }

//   clearData(): void {
//     // this.Alumnos = [];
//   }

//   addAlumno(): void {
//     this.nuevoAlumno.fullName = `${this.nuevoAlumno.firstName} ${this.nuevoAlumno.lastName}`;
//     // this.Alumnos.push({ ...this.nuevoAlumno });

//     // Limpiar el formulario
//     this.nuevoAlumno = {
//       firstName: '',
//       lastName: '',
//       fullName: '',
//       dni: 0,
//       age: 0,
//       course: '',
//       isActive: false,
//       photo: '',
//     };
//   }


// }
