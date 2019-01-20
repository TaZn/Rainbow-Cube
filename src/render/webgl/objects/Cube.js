const THREE = window.THREE;
import exceptions from './../../../errorhandling/exceptions.js';

export default class Cube {

  constructor(color = 0xffffff) {    
    this._geometry = new THREE.BoxGeometry(1, 1, 1);
    this._material = new THREE.MeshBasicMaterial({color: color});
    this._object = new THREE.Mesh(this._geometry, this._material);

    this._position = null;

    //------------
    this.getObject = this.getObject.bind(this);
    this.tweakPosition = this.tweakPosition.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.setPosition = this.setPosition.bind(this);
    //------------
  }

  getObject() {
    return this._object;
  }

  tweakPosition() {}

  setPosition(position) {
    if (!position.hasOwnProperty('x') || !position.hasOwnProperty('y')) {
      throw new Error(exceptions['INVALID_POSITION_OBJECT']);
    }
    this._position = {
      x: position.x,
      y: position.y * -1
    };
  }

  getPosition() {  
    return this._position;
  }

}
