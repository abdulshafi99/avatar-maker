import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-maker',
  templateUrl: './avatar-maker.component.html',
  styleUrls: ['./avatar-maker.component.scss'],
})
export class AvatarMakerComponent {
  skin!: string;
  hair!: string;
  faicalHair!: string;
  body!: string;
  background!: string;

  skinStyles = [
    { color: '#ffcc22', status: false },
    { color: '#fbd2c7', status: false },
    { color: '#f2ad9b', status: false },
    { color: '#e58f7b', status: false },
    { color: '#e4a070', status: false },
    { color: '#b16a5b', status: false },
    { color: '#92594b', status: false },
    { color: '#623d36', status: false },
    { color: '#c9e6dc', status: false },
  ];
  hairStyles = [
    { color: '#ffcc22', status: false },
    { color: '#fbd2c7', status: false },
    { color: '#f2ad9b', status: false },
    { color: '#e58f7b', status: false },
    { color: '#e4a070', status: false },
    { color: '#b16a5b', status: false },
    { color: '#92594b', status: false },
    { color: '#623d36', status: false },
    { color: '#c9e6dc', status: false },
  ];
  faicalHairStyles = [
    { color: '#ffcc22', status: false },
    { color: '#fbd2c7', status: false },
    { color: '#f2ad9b', status: false },
    { color: '#e58f7b', status: false },
    { color: '#e4a070', status: false },
    { color: '#b16a5b', status: false },
    { color: '#92594b', status: false },
    { color: '#623d36', status: false },
    { color: '#c9e6dc', status: false },
  ];
  bodyStyles = [
    { color: '#ffcc22', status: false },
    { color: '#fbd2c7', status: false },
    { color: '#f2ad9b', status: false },
    { color: '#e58f7b', status: false },
    { color: '#e4a070', status: false },
    { color: '#b16a5b', status: false },
    { color: '#92594b', status: false },
    { color: '#623d36', status: false },
    { color: '#c9e6dc', status: false },
  ];
  backgroundStyles = [
    { color: '#ffcc22', status: false },
    { color: '#fbd2c7', status: false },
    { color: '#f2ad9b', status: false },
    { color: '#e58f7b', status: false },
    { color: '#e4a070', status: false },
    { color: '#b16a5b', status: false },
    { color: '#92594b', status: false },
    { color: '#623d36', status: false },
    { color: '#c9e6dc', status: false },
  ];

  changeBody(color: string): void {
    this.body = color;
    this.bodyStyles.forEach((bodyStyle) => {
      bodyStyle.status = bodyStyle.color === color ? true : false;
    });
    console.log('Body color: ', this.body);
    this.generateAvatar();
  }

  changeBackground(color: string): void {
    this.background = color;
    this.backgroundStyles.forEach((backgroundStyle) => {
      backgroundStyle.status = backgroundStyle.color === color ? true : false;
    });
    console.log('Background color: ', this.background);
    this.generateAvatar();
  }

  changeSkin(color: string): void {
    this.skin = color;
    this.skinStyles.forEach((skinStyle) => {
      skinStyle.status = skinStyle.color === color ? true : false;
    });
    console.log('Skin color: ', this.skin);
    this.generateAvatar();
  }

  changeHair(color: string): void {
    this.hair = color;
    this.hairStyles.forEach((hairStyle) => {
      hairStyle.status = hairStyle.color === color ? true : false;
    });
    console.log('Hair color: ', this.body);
    this.generateAvatar();
  }

  faicalHairChange(color: string): void {
    this.faicalHair = color;
    this.faicalHairStyles.forEach((faicalHairStyle) => {
      faicalHairStyle.status = faicalHairStyle.color === color ? true : false;
    });
    console.log('Faical Hair color: ', this.body);
    this.generateAvatar();
  }

  generateAvatar() {}
}
