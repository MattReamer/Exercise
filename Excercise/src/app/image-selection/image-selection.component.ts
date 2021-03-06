import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service'
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
@Component({
  selector: 'app-image-selection',
  templateUrl: './image-selection.component.html',
  styleUrls: ['./image-selection.component.css']
})
export class ImageSelectionComponent implements OnInit {

  response: {};
  image: {};
  myForm: FormGroup;
  inputText: string;

  constructor(private svc: ImagesService) {
  }

  ngOnInit() {
    this.initializeForm();

  }

  initializeForm() {
    this.myForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      img: new FormControl()
    })
  }
  search(arg) {
    this.svc.search(this.inputText).subscribe((response) => {
      this.response = response.results;
      console.log(this.response)

    });
  }

  makeSelection(image) {
    this.image = image;
    console.log(image);
    this.inputText = "";
    this.myForm.setValue(
      {
        img: image.urls.full,
        name: image.id,
        description: image.description ? image.description : "No Description"
      })
  }

  clear() {
    var result = confirm("Are you sure you want to clear your selection?")
    if (result) {
      this.image = null;
      this.myForm.setValue(
        {
          img: null,
          name: null,
          description: null
        })
    }
  }
}



