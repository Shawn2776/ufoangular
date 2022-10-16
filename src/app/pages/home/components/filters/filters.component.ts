import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "filters.component.html",
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categories = [
    "all",
    "clutch covers",
    "gear covers",
    "mag covers",
    "gas caps",
    "clothing",
  ];
  constructor() {}

  ngOnInit(): void {}

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}