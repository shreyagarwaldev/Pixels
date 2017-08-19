import { Component, OnInit, Input, ElementRef, Renderer, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})

/* tslint:disable */
export class DropdownComponent {
  @Input() dataModel: any[];
  @Input() buttonLabel: string;
  @Input() optionName: string;
  
  @Output() selectionChanged = new EventEmitter();

  isCollapsed: boolean;
  private selfClick: boolean;
  private panelOverlay: boolean;

  constructor(private renderer: Renderer, private element: ElementRef) {
    this.isCollapsed = true;
    this.selfClick = false;
    this.panelOverlay = false;
  }

  ngOnInit() {
    var that = this;
    this.renderer.listenGlobal('document', 'click', (event: any) => {
      if (!that.isCollapsed && !that.selfClick && !this.panelOverlay) {
        that.isCollapsed = true;
    	this.selectionChanged.emit("changed");
    }
      that.selfClick = false;
      this.panelOverlay = false;
    });
  }

  toggleDropdown() {
    if (!this.panelOverlay) {
      this.isCollapsed = !this.isCollapsed;
    }
    this.selfClick = true;
  }

  overlay() {
    this.panelOverlay = true;
  }
}
