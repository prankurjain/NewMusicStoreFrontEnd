import { Component, OnInit } from "@angular/core";
import { OperationsService } from "../operations.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private operationService: OperationsService) {}

  selectedFile: File;

  retrievedImage: any;

  base64Data: any;

  retrieveResonse: any;

  message: string;

  imageName: any;
  ngOnInit() {}

  public onFileChanged(event) {
    //Select File

    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image

  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.

    const uploadImageData = new FormData();

    uploadImageData.append(
      "imageFile",
      this.selectedFile,
      this.selectedFile.name
    );

    // Make a call to the Spring Boot Application to save the image

    this.operationService.uploadImage(uploadImageData)
      .subscribe((response) =>
      {
        console.log(response);
      });
  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.

    this.operationService.getImage(this.imageName)
      .subscribe((res) => {
        console.log("res"+res);
        this.retrieveResonse = res;

        this.base64Data = this.retrieveResonse.picByte;

        // this.retrievedImage = "data:image/jpeg;base64," + this.base64Data;
        this.retrievedImage = "data:video/mp4;base64," + this.base64Data;
      });
  }
}
