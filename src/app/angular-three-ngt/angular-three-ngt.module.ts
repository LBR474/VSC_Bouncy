import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular three imports
import { NgtCanvas } from '@angular-three/core';
import { NgtPrimitive } from '@angular-three/core/primitive';
import {
    NgtColorAttribute,
    NgtVector2Attribute,
} from '@angular-three/core/attributes';
//import { XyzComponent } from './xyz/xyz.component';
import {
    NgtAmbientLight,
    NgtHemisphereLight,
    NgtPointLight,
    NgtSpotLight,
    NgtDirectionalLight,
} from '@angular-three/core/lights';
import {
    NgtGridHelper,
    NgtAxesHelper,
    NgtBoxHelper,
} from '@angular-three/core/helpers';
import { NgtPerspectiveCamera, NgtOrthographicCamera } from '@angular-three/core/cameras';
import { NgtSkeletonHelper } from '@angular-three/core/helpers';
import {
    NgtMeshStandardMaterial,
    NgtMeshBasicMaterial,
    NgtMeshPhongMaterial,
} from '@angular-three/core/materials';
import { NgtMesh } from '@angular-three/core/meshes';
import {
    NgtBoxGeometry,
    NgtPlaneGeometry,
} from '@angular-three/core/geometries';

// soba imports
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgtCanvas,
        NgtPrimitive,
        NgtColorAttribute,
        NgtAmbientLight,
        NgtGridHelper,
        NgtOrthographicCamera,
        NgtPerspectiveCamera,
        NgtSobaOrbitControls,
        NgtSkeletonHelper,
        NgtMeshStandardMaterial,
        NgtPointLight,
        NgtAxesHelper,
        NgtMesh,
        NgtBoxGeometry,
        NgtMeshBasicMaterial,
        NgtBoxHelper,
        NgtPlaneGeometry,
        NgtMeshPhongMaterial,
        NgtHemisphereLight,
        NgtVector2Attribute,
        NgtSpotLight,
        NgtDirectionalLight,
    ],
    exports: [
        NgtCanvas,
        NgtPrimitive,
        NgtColorAttribute,
        NgtAmbientLight,
        NgtGridHelper,
        NgtOrthographicCamera,
        NgtPerspectiveCamera,
        NgtSobaOrbitControls,
        NgtSkeletonHelper,
        NgtMeshStandardMaterial,
        NgtPointLight,
        NgtAxesHelper,
        NgtMesh,
        NgtBoxGeometry,
        NgtMeshBasicMaterial,
        NgtBoxHelper,
        NgtPlaneGeometry,
        NgtMeshPhongMaterial,
        NgtHemisphereLight,
        NgtVector2Attribute,
        NgtSpotLight,
        NgtDirectionalLight,
    ],
})
export class AngularThreeNGTModule { }