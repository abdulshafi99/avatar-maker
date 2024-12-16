import { Component } from '@angular/core';
import {
  AccessoriesColor,
  AccessoriesType,
  AvatarSelection,
  AvatarStyle,
  AwardType,
  BackgroundColor,
  ClotheColor,
  ClotheType,
  EarringColor,
  EarringType,
  EyebrowType,
  EyeType,
  FacialHairType,
  GraphicType,
  HairColor,
  HatColor,
  MouthType,
  NoseType,
  PetType,
  SaveAvatar,
  SkinColor,
  TopType,
} from 'ng-avataaars-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  avatarSelection: AvatarSelection = {
    avatarStyle: AvatarStyle.Circle,
    topType: TopType.ShortHairShortFlat,
    accessoriesType: AccessoriesType.Blank,
    hairColor: HairColor.Black,
    facialHairType: FacialHairType.Blank,
    facialHairColor: HairColor.Black,
    eyebrowColor: HairColor.Black,
    clotheType: ClotheType.BlazerShirt,
    clotheColor: ClotheColor.Blue02,
    clotheColor2: ClotheColor.Blue01,
    clotheColor3: ClotheColor.Black,
    eyeType: EyeType.Default,
    eyebrowType: EyebrowType.Default,
    mouthType: MouthType.Smile,
    skinColor: SkinColor.Light,
    backgroundColor: BackgroundColor.ColorH,
    graphicType: GraphicType.Bat,
    petType: PetType.None,
    awardType: AwardType.None,
    hatColor: HatColor.Black,
    accessoriesColor: AccessoriesColor.Black,
    noseType: NoseType.Default,
    earringType: EarringType.Blank,
    earringColor: EarringColor.Black,
  };

  onAvatarSaved(saveAvatar: SaveAvatar) {
    console.log(saveAvatar.svg);
    localStorage.setItem('avatar', JSON.stringify(saveAvatar.avatarSelection));
  }
}
