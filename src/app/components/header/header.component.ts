import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'To-Do';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  // contructor roda quando o componente é inicializado
  // ngOnInit - metodo de ciclo de vida tipo o useEffect

  ngOnInit(): void {}

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}
