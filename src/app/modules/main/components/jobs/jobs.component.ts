import { Component } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent  {
  private path = '../../../../../assets/jobs'
  public faAngleRight = faAngleRight
  public jobs = [
    {
      image: `${this.path}/mochileros.jpg`,
      title: 'Mochileros',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://mochileros.com.mx/'
    },
    {
      image: `${this.path}/mochileros.jpg`,
      title: 'Mochileros',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://mochileros.com.mx/'
    },
    {
      image: `${this.path}/mochileros.jpg`,
      title: 'Mochileros',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://mochileros.com.mx/'
    },
    {
      image: `${this.path}/mochileros.jpg`,
      title: 'Mochileros',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://mochileros.com.mx/'
    },
    {
      image: `${this.path}/mochileros.jpg`,
      title: 'Mochileros',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://mochileros.com.mx/'
    },
    {
      image: `${this.path}/mochileros.jpg`,
      title: 'Mochileros',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://mochileros.com.mx/'
    },
  ]

  constructor() { }

}
