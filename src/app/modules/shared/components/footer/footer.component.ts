import { Component } from '@angular/core';
import { faLinkedinIn, faGithub, faGitlab, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public controls = [
    {
      icon: faLinkedinIn,
      name: 'linkedIn',
      link: 'https://www.linkedin.com/in/daniel-lopezj/'
    },
    {
      icon: faTwitter,
      name: 'twitter',
      link: 'https://twitter.com/daniellopezj01'
    },
    {
      icon: faGithub,
      name: 'hithub',
      link: 'https://github.com/ldani-dev'
    },
    {
      icon: faInstagram,
      name: 'instagram',
      link: 'https://www.instagram.com/daniellopezzj/'
    },

  ]
  constructor(private router: Router) { }

  goTo(route: string) {
    this.router.navigate([route])
  }

}
