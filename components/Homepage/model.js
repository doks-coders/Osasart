import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}



/***
 * import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
 * 
 * 
 
 * const loader = new GLTFLoader()
loader.setDecoderPath( 'three/examples/js/libs/draco/' );

var dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath('path/to/decoders/');
dracoLoader.setDecoderConfig({type: 'js'});



   const loader = new DRACOLoader()
    loader.setDecoderPath( 'three/examples/js/libs/draco/' );
    loader.setDecoderConfig({type: 'js'});

 */
