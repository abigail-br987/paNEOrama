// @ts-nocheck
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

interface GLTFResult extends GLTF {
    nodes: {
        Cylinder: THREE.Mesh;
        Cube010: THREE.Mesh;
        Cylinder002: THREE.Mesh;
        Cylinder004: THREE.Mesh;
        Plane001: THREE.Mesh;
        rock060: THREE.Mesh;
        Cylinder007: THREE.Mesh;
        Cylinder006: THREE.Mesh;
        Cylinder008: THREE.Mesh;
        Cylinder009: THREE.Mesh;
        Cylinder010: THREE.Mesh;
        Cylinder011: THREE.Mesh;
        Cylinder012: THREE.Mesh;
        Cylinder013: THREE.Mesh;
        Cylinder014: THREE.Mesh;
        Cylinder015: THREE.Mesh;
        Cylinder016: THREE.Mesh;
        Cylinder017: THREE.Mesh;
        Cylinder018: THREE.Mesh;
        Cylinder019: THREE.Mesh;
        Cylinder020: THREE.Mesh;
        Cylinder021: THREE.Mesh;
        Cylinder022: THREE.Mesh;
        Cylinder023: THREE.Mesh;
        Cylinder024: THREE.Mesh;
        Cylinder025: THREE.Mesh;
        Cylinder026: THREE.Mesh;
        Cylinder027: THREE.Mesh;
        Cylinder028: THREE.Mesh;
        Cylinder029: THREE.Mesh;
        Cylinder030: THREE.Mesh;
        Cylinder031: THREE.Mesh;
        Cylinder032: THREE.Mesh;
        Cylinder033: THREE.Mesh;
        Cylinder034: THREE.Mesh;
        Cylinder035: THREE.Mesh;
        Cylinder036: THREE.Mesh;
        Cylinder037: THREE.Mesh;
        Cylinder038: THREE.Mesh;
        Cylinder039: THREE.Mesh;
        Cylinder040: THREE.Mesh;
        Cylinder041: THREE.Mesh;
        Cylinder042: THREE.Mesh;
        Cylinder043: THREE.Mesh;
        Cylinder044: THREE.Mesh;
        Cylinder045: THREE.Mesh;
        Cylinder046: THREE.Mesh;
        Cylinder047: THREE.Mesh;
        Cylinder048: THREE.Mesh;
        Cylinder049: THREE.Mesh;
        Cylinder050: THREE.Mesh;
        Cylinder051: THREE.Mesh;
        Cylinder052: THREE.Mesh;
        Cylinder053: THREE.Mesh;
        Cylinder054: THREE.Mesh;
        Cylinder055: THREE.Mesh;
        Cylinder056: THREE.Mesh;
        Cylinder057: THREE.Mesh;
        Cylinder058: THREE.Mesh;
        Cylinder059: THREE.Mesh;
        Cylinder060: THREE.Mesh;
        Cylinder061: THREE.Mesh;
        Cylinder062: THREE.Mesh;
        Cylinder063: THREE.Mesh;
        Cylinder064: THREE.Mesh;
        Cylinder065: THREE.Mesh;
        Cylinder066: THREE.Mesh;
        Cylinder067: THREE.Mesh;
        Cylinder068: THREE.Mesh;
        Cylinder069: THREE.Mesh;
        Cylinder070: THREE.Mesh;
        Cylinder071: THREE.Mesh;
        Cylinder005: THREE.Mesh;
        Cylinder072: THREE.Mesh;
        Cylinder074: THREE.Mesh;
        Cylinder073: THREE.Mesh;
        Cylinder075: THREE.Mesh;
        Cylinder076: THREE.Mesh;
        Cylinder077: THREE.Mesh;
        Cylinder078: THREE.Mesh;
        Cylinder079: THREE.Mesh;
        Cylinder080: THREE.Mesh;
        Cylinder081: THREE.Mesh;
        Cylinder082: THREE.Mesh;
        Cylinder083: THREE.Mesh;
        Cylinder001: THREE.Mesh;
        Cylinder084: THREE.Mesh;
        Cylinder085: THREE.Mesh;
        Cylinder086: THREE.Mesh;
        Cylinder087: THREE.Mesh;
        Cylinder088: THREE.Mesh;
        Cylinder089: THREE.Mesh;
        Cylinder090: THREE.Mesh;
        Cylinder091: THREE.Mesh;
        Cylinder092: THREE.Mesh;
        Cylinder093: THREE.Mesh;
        Cylinder094: THREE.Mesh;
        Cylinder095: THREE.Mesh;
        Cylinder096: THREE.Mesh;
        Cylinder097: THREE.Mesh;
        Cylinder098: THREE.Mesh;
        Cylinder099: THREE.Mesh;
        Cylinder100: THREE.Mesh;
        Cylinder101: THREE.Mesh;
        Cylinder102: THREE.Mesh;
        Cylinder103: THREE.Mesh;
        Cylinder104: THREE.Mesh;
        Cylinder105: THREE.Mesh;
        Cylinder106: THREE.Mesh;
        Cylinder107: THREE.Mesh;
        Cylinder108: THREE.Mesh;
        Cylinder109: THREE.Mesh;
        Cylinder110: THREE.Mesh;
        Cylinder111: THREE.Mesh;
        Cylinder112: THREE.Mesh;
        Cylinder113: THREE.Mesh;
        Cylinder114: THREE.Mesh;
        Cylinder115: THREE.Mesh;
        Cylinder116: THREE.Mesh;
        Cylinder117: THREE.Mesh;
        Cylinder118: THREE.Mesh;
        Cylinder119: THREE.Mesh;
        Cylinder120: THREE.Mesh;
        Cylinder121: THREE.Mesh;
        Cylinder122: THREE.Mesh;
        Cylinder123: THREE.Mesh;
        Cylinder124: THREE.Mesh;
        Cylinder125: THREE.Mesh;
        Cylinder126: THREE.Mesh;
        Cylinder127: THREE.Mesh;
        Cylinder128: THREE.Mesh;
        Cylinder129: THREE.Mesh;
        Cylinder130: THREE.Mesh;
        Cylinder131: THREE.Mesh;
        Cylinder132: THREE.Mesh;
        Cylinder133: THREE.Mesh;
        Cylinder134: THREE.Mesh;
        Cylinder135: THREE.Mesh;
        Cylinder136: THREE.Mesh;
        Cylinder137: THREE.Mesh;
        Plane003: THREE.Mesh;
        Cylinder138: THREE.Mesh;
        Plane004: THREE.Mesh;
        Plane005: THREE.Mesh;
        Plane006: THREE.Mesh;
        Plane007: THREE.Mesh;
        Plane008: THREE.Mesh;
        Plane009: THREE.Mesh;
        Plane010: THREE.Mesh;
        Plane011: THREE.Mesh;
    };
    materials: {
        ["01"]: THREE.MeshStandardMaterial;
        piv: THREE.MeshStandardMaterial;
        blk: THREE.MeshStandardMaterial;
        rk: THREE.MeshStandardMaterial;
        gls: THREE.MeshStandardMaterial;
        lmp: THREE.MeshStandardMaterial;
        grt: THREE.MeshStandardMaterial;
        grl2: THREE.MeshStandardMaterial;
    };
}

const Windows = (props: JSX.IntrinsicElements["group"]) => {
    const { nodes, materials } = useGLTF("/windows.glb") as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="Cylinder"
                    geometry={nodes.Cylinder.geometry}
                    material={materials["01"]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Cylinder002"
                    geometry={nodes.Cylinder002.geometry}
                    material={materials.blk}
                    position={[0, 0, 3.644]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[1.072, 1.004, 1.072]}
                />
                <mesh
                    name="Cylinder004"
                    geometry={nodes.Cylinder004.geometry}
                    material={materials.blk}
                    position={[0, 0, -2.565]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[1.072, 1.004, 1.072]}
                />
                <mesh
                    name="Plane001"
                    geometry={nodes.Plane001.geometry}
                    material={materials["01"]}
                    position={[1.905, 0, -2.779]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[1.353, 1, 1]}
                />
                <mesh
                    name="Cylinder007"
                    geometry={nodes.Cylinder007.geometry}
                    material={materials["01"]}
                    position={[-1.209, -0.224, -0.652]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.013, 0.035, 0.013]}
                />
                <mesh
                    name="Cylinder006"
                    geometry={nodes.Cylinder006.geometry}
                    material={materials["01"]}
                    position={[-1.097, -0.2, -0.652]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.013, 0.035, 0.013]}
                />
                <mesh
                    name="Cylinder008"
                    geometry={nodes.Cylinder008.geometry}
                    material={materials["01"]}
                    position={[-1.198, -0.281, -0.652]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.013, 0.035, 0.013]}
                />
                <mesh
                    name="Cylinder009"
                    geometry={nodes.Cylinder009.geometry}
                    material={materials["01"]}
                    position={[-1.086, -0.258, -0.652]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.013, 0.035, 0.013]}
                />
                <mesh
                    name="Cylinder010"
                    geometry={nodes.Cylinder010.geometry}
                    material={materials["01"]}
                    position={[-1.178, 0.356, -0.652]}
                    rotation={[Math.PI / 2, -0.474, 0]}
                    scale={[0.013, 0.035, 0.013]}
                />
                <mesh
                    name="Cylinder011"
                    geometry={nodes.Cylinder011.geometry}
                    material={materials["01"]}
                    position={[-1.067, 0.323, -0.652]}
                    rotation={[Math.PI / 2, -0.474, 0]}
                    scale={[0.013, 0.035, 0.013]}
                />
                <mesh
                    name="Cylinder012"
                    geometry={nodes.Cylinder012.geometry}
                    material={materials["01"]}
                    position={[-1.195, 0.3, -0.652]}
                    rotation={[Math.PI / 2, -0.474, 0]}
                    scale={[0.013, 0.035, 0.013]}
                />
                <mesh
                    name="Cylinder013"
                    geometry={nodes.Cylinder013.geometry}
                    material={materials["01"]}
                    position={[-1.083, 0.267, -0.652]}
                    rotation={[Math.PI / 2, -0.474, 0]}
                    scale={[0.013, 0.035, 0.013]}
                />
                <mesh
                    name="Cylinder014"
                    geometry={nodes.Cylinder014.geometry}
                    material={materials["01"]}
                    position={[-1.205, -0.225, 0.65]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[-0.013, -0.035, -0.013]}
                />
                <mesh
                    name="Cylinder015"
                    geometry={nodes.Cylinder015.geometry}
                    material={materials["01"]}
                    position={[-1.091, -0.2, 0.65]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[-0.013, -0.035, -0.013]}
                />
                <mesh
                    name="Cylinder016"
                    geometry={nodes.Cylinder016.geometry}
                    material={materials["01"]}
                    position={[-1.194, -0.283, 0.65]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[-0.013, -0.035, -0.013]}
                />
                <mesh
                    name="Cylinder017"
                    geometry={nodes.Cylinder017.geometry}
                    material={materials["01"]}
                    position={[-1.08, -0.257, 0.65]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[-0.013, -0.035, -0.013]}
                />
                <mesh
                    name="Cylinder018"
                    geometry={nodes.Cylinder018.geometry}
                    material={materials["01"]}
                    position={[-1.181, 0.354, 0.65]}
                    rotation={[-Math.PI / 2, 0.474, Math.PI]}
                    scale={[-0.013, -0.035, -0.013]}
                />
                <mesh
                    name="Cylinder019"
                    geometry={nodes.Cylinder019.geometry}
                    material={materials["01"]}
                    position={[-1.062, 0.32, 0.65]}
                    rotation={[-Math.PI / 2, 0.474, Math.PI]}
                    scale={[-0.013, -0.035, -0.013]}
                />
                <mesh
                    name="Cylinder020"
                    geometry={nodes.Cylinder020.geometry}
                    material={materials["01"]}
                    position={[-1.198, 0.298, 0.65]}
                    rotation={[-Math.PI / 2, 0.474, Math.PI]}
                    scale={[-0.013, -0.035, -0.013]}
                />
                <mesh
                    name="Cylinder021"
                    geometry={nodes.Cylinder021.geometry}
                    material={materials["01"]}
                    position={[-1.079, 0.264, 0.65]}
                    rotation={[-Math.PI / 2, 0.474, Math.PI]}
                    scale={[-0.013, -0.035, -0.013]}
                />
                <mesh
                    name="Cylinder022"
                    geometry={nodes.Cylinder022.geometry}
                    material={materials["01"]}
                    position={[-1.159, -0.138, -0.681]}
                    rotation={[Math.PI / 2, 0.091, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder023"
                    geometry={nodes.Cylinder023.geometry}
                    material={materials["01"]}
                    position={[-1.165, -0.073, -0.681]}
                    rotation={[Math.PI / 2, 0.091, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder024"
                    geometry={nodes.Cylinder024.geometry}
                    material={materials["01"]}
                    position={[-1.166, -0.004, -0.681]}
                    rotation={[Math.PI / 2, -0.003, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder025"
                    geometry={nodes.Cylinder025.geometry}
                    material={materials["01"]}
                    position={[-1.166, 0.062, -0.681]}
                    rotation={[Math.PI / 2, -0.003, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder026"
                    geometry={nodes.Cylinder026.geometry}
                    material={materials["01"]}
                    position={[-1.159, 0.136, -0.681]}
                    rotation={[Math.PI / 2, -0.163, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder027"
                    geometry={nodes.Cylinder027.geometry}
                    material={materials["01"]}
                    position={[-1.148, 0.208, -0.681]}
                    rotation={[Math.PI / 2, -0.163, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder028"
                    geometry={nodes.Cylinder028.geometry}
                    material={materials["01"]}
                    position={[-1.091, 0.413, -0.681]}
                    rotation={[Math.PI / 2, -0.376, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder029"
                    geometry={nodes.Cylinder029.geometry}
                    material={materials["01"]}
                    position={[-1.059, 0.483, -0.681]}
                    rotation={[Math.PI / 2, -0.442, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder030"
                    geometry={nodes.Cylinder030.geometry}
                    material={materials["01"]}
                    position={[-1.021, 0.56, -0.681]}
                    rotation={[Math.PI / 2, -0.537, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder031"
                    geometry={nodes.Cylinder031.geometry}
                    material={materials["01"]}
                    position={[-0.979, 0.637, -0.681]}
                    rotation={[Math.PI / 2, -0.565, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder032"
                    geometry={nodes.Cylinder032.geometry}
                    material={materials["01"]}
                    position={[-1.106, -0.367, -0.681]}
                    rotation={[Math.PI / 2, 0.376, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder033"
                    geometry={nodes.Cylinder033.geometry}
                    material={materials["01"]}
                    position={[-1.073, -0.445, -0.681]}
                    rotation={[Math.PI / 2, 0.442, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder034"
                    geometry={nodes.Cylinder034.geometry}
                    material={materials["01"]}
                    position={[-1.041, -0.516, -0.681]}
                    rotation={[Math.PI / 2, 0.537, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder035"
                    geometry={nodes.Cylinder035.geometry}
                    material={materials["01"]}
                    position={[-1.003, -0.596, -0.681]}
                    rotation={[Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder036"
                    geometry={nodes.Cylinder036.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, -0.61]}
                    rotation={[Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder037"
                    geometry={nodes.Cylinder037.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, -0.503]}
                    rotation={[Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder038"
                    geometry={nodes.Cylinder038.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, -0.39]}
                    rotation={[Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder039"
                    geometry={nodes.Cylinder039.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, -0.283]}
                    rotation={[Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder040"
                    geometry={nodes.Cylinder040.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, -0.172]}
                    rotation={[Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder041"
                    geometry={nodes.Cylinder041.geometry}
                    material={materials["01"]}
                    position={[-0.918, 0.727, -0.592]}
                    rotation={[Math.PI / 2, -0.788, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder042"
                    geometry={nodes.Cylinder042.geometry}
                    material={materials["01"]}
                    position={[-0.917, 0.727, -0.485]}
                    rotation={[Math.PI / 2, -0.788, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder043"
                    geometry={nodes.Cylinder043.geometry}
                    material={materials["01"]}
                    position={[-0.917, 0.727, -0.372]}
                    rotation={[Math.PI / 2, -0.788, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder044"
                    geometry={nodes.Cylinder044.geometry}
                    material={materials["01"]}
                    position={[-0.917, 0.728, -0.265]}
                    rotation={[Math.PI / 2, -0.788, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder045"
                    geometry={nodes.Cylinder045.geometry}
                    material={materials["01"]}
                    position={[-0.916, 0.728, -0.154]}
                    rotation={[Math.PI / 2, -0.788, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder046"
                    geometry={nodes.Cylinder046.geometry}
                    material={materials["01"]}
                    position={[-1.159, -0.138, 0.679]}
                    rotation={[-Math.PI / 2, -0.091, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder047"
                    geometry={nodes.Cylinder047.geometry}
                    material={materials["01"]}
                    position={[-1.165, -0.073, 0.679]}
                    rotation={[-Math.PI / 2, -0.091, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder048"
                    geometry={nodes.Cylinder048.geometry}
                    material={materials["01"]}
                    position={[-1.166, -0.004, 0.679]}
                    rotation={[-Math.PI / 2, 0.003, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder049"
                    geometry={nodes.Cylinder049.geometry}
                    material={materials["01"]}
                    position={[-1.166, 0.062, 0.679]}
                    rotation={[-Math.PI / 2, 0.003, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder050"
                    geometry={nodes.Cylinder050.geometry}
                    material={materials["01"]}
                    position={[-1.159, 0.136, 0.679]}
                    rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder051"
                    geometry={nodes.Cylinder051.geometry}
                    material={materials["01"]}
                    position={[-1.148, 0.208, 0.679]}
                    rotation={[-Math.PI / 2, 0.163, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder052"
                    geometry={nodes.Cylinder052.geometry}
                    material={materials["01"]}
                    position={[-1.091, 0.413, 0.679]}
                    rotation={[-Math.PI / 2, 0.376, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder053"
                    geometry={nodes.Cylinder053.geometry}
                    material={materials["01"]}
                    position={[-1.059, 0.483, 0.679]}
                    rotation={[-Math.PI / 2, 0.442, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder054"
                    geometry={nodes.Cylinder054.geometry}
                    material={materials["01"]}
                    position={[-1.021, 0.56, 0.679]}
                    rotation={[-Math.PI / 2, 0.537, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder055"
                    geometry={nodes.Cylinder055.geometry}
                    material={materials["01"]}
                    position={[-0.979, 0.637, 0.679]}
                    rotation={[-Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder056"
                    geometry={nodes.Cylinder056.geometry}
                    material={materials["01"]}
                    position={[-1.106, -0.367, 0.679]}
                    rotation={[-Math.PI / 2, -0.376, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder057"
                    geometry={nodes.Cylinder057.geometry}
                    material={materials["01"]}
                    position={[-1.073, -0.445, 0.679]}
                    rotation={[-Math.PI / 2, -0.442, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder058"
                    geometry={nodes.Cylinder058.geometry}
                    material={materials["01"]}
                    position={[-1.041, -0.516, 0.679]}
                    rotation={[-Math.PI / 2, -0.537, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder059"
                    geometry={nodes.Cylinder059.geometry}
                    material={materials["01"]}
                    position={[-1.003, -0.596, 0.679]}
                    rotation={[-Math.PI / 2, -0.565, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder060"
                    geometry={nodes.Cylinder060.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, 0.607]}
                    rotation={[-Math.PI / 2, -0.565, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder061"
                    geometry={nodes.Cylinder061.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, 0.5]}
                    rotation={[-Math.PI / 2, -0.565, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder062"
                    geometry={nodes.Cylinder062.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, 0.387]}
                    rotation={[-Math.PI / 2, -0.565, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder063"
                    geometry={nodes.Cylinder063.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, 0.281]}
                    rotation={[-Math.PI / 2, -0.565, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder064"
                    geometry={nodes.Cylinder064.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, 0.169]}
                    rotation={[-Math.PI / 2, -0.565, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder065"
                    geometry={nodes.Cylinder065.geometry}
                    material={materials["01"]}
                    position={[-0.918, 0.727, 0.589]}
                    rotation={[-Math.PI / 2, 0.788, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder066"
                    geometry={nodes.Cylinder066.geometry}
                    material={materials["01"]}
                    position={[-0.917, 0.727, 0.482]}
                    rotation={[-Math.PI / 2, 0.788, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder067"
                    geometry={nodes.Cylinder067.geometry}
                    material={materials["01"]}
                    position={[-0.917, 0.727, 0.369]}
                    rotation={[-Math.PI / 2, 0.788, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder068"
                    geometry={nodes.Cylinder068.geometry}
                    material={materials["01"]}
                    position={[-0.917, 0.728, 0.262]}
                    rotation={[-Math.PI / 2, 0.788, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder069"
                    geometry={nodes.Cylinder069.geometry}
                    material={materials["01"]}
                    position={[-0.916, 0.728, 0.151]}
                    rotation={[-Math.PI / 2, 0.788, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder070"
                    geometry={nodes.Cylinder070.geometry}
                    material={materials["01"]}
                    position={[-0.96, -0.663, -0.027]}
                    rotation={[Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.006, -0.018, -0.006]}
                />
                <mesh
                    name="Cylinder071"
                    geometry={nodes.Cylinder071.geometry}
                    material={materials["01"]}
                    position={[-0.916, 0.728, -0.009]}
                    rotation={[Math.PI / 2, -0.788, -Math.PI / 2]}
                    scale={[0.006, 0.018, 0.006]}
                />
                <mesh
                    name="Cylinder005"
                    geometry={nodes.Cylinder005.geometry}
                    material={materials.gls}
                    scale={1.039}
                >
                    <meshPhysicalMaterial
                        thickness={5}
                        opacity={0.01}
                        transparent={true}
                        transmission={0.3}
                        ior={10}
                        reflectivity={5}
                    />
                </mesh>
                <mesh
                    name="Cylinder072"
                    geometry={nodes.Cylinder072.geometry}
                    material={materials["01"]}
                    position={[-0.88, 0.037, 1.724]}
                    rotation={[Math.PI / 2, -0.327, 0]}
                />
                <mesh
                    name="Cylinder074"
                    geometry={nodes.Cylinder074.geometry}
                    material={materials["01"]}
                    position={[-1.015, 0.037, 2.405]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.877}
                />
                <mesh
                    name="Cylinder073"
                    geometry={nodes.Cylinder073.geometry}
                    material={materials["01"]}
                    position={[-1.015, 0.037, 1.519]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.877}
                />
                <mesh
                    name="Cylinder075"
                    geometry={nodes.Cylinder075.geometry}
                    material={materials["01"]}
                    position={[-1.015, 0.037, 1.961]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.877}
                />
                <mesh
                    name="Cylinder076"
                    geometry={nodes.Cylinder076.geometry}
                    material={materials["01"]}
                    position={[-1.015, 0.037, 1.083]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.877}
                />
                <mesh
                    name="Cylinder077"
                    geometry={nodes.Cylinder077.geometry}
                    material={materials["01"]}
                    position={[-1.025, 0.037, 0.869]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={0.877}
                />
                <mesh
                    name="Cylinder078"
                    geometry={nodes.Cylinder078.geometry}
                    material={materials["01"]}
                    position={[-0.88, 0.037, -1.725]}
                    rotation={[-Math.PI / 2, 0.327, -Math.PI]}
                    scale={-1}
                />
                <mesh
                    name="Cylinder079"
                    geometry={nodes.Cylinder079.geometry}
                    material={materials["01"]}
                    position={[-1.015, 0.037, -2.407]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={-0.877}
                />
                <mesh
                    name="Cylinder080"
                    geometry={nodes.Cylinder080.geometry}
                    material={materials["01"]}
                    position={[-1.015, 0.037, -1.52]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={-0.877}
                />
                <mesh
                    name="Cylinder081"
                    geometry={nodes.Cylinder081.geometry}
                    material={materials["01"]}
                    position={[-1.015, 0.037, -1.963]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={-0.877}
                />
                <mesh
                    name="Cylinder082"
                    geometry={nodes.Cylinder082.geometry}
                    material={materials["01"]}
                    position={[-1.015, 0.037, -1.085]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={-0.877}
                />
                <mesh
                    name="Cylinder083"
                    geometry={nodes.Cylinder083.geometry}
                    material={materials["01"]}
                    position={[-1.025, 0.037, -0.87]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={-0.877}
                />
                <mesh
                    name="Cylinder001"
                    geometry={nodes.Cylinder001.geometry}
                    material={materials["01"]}
                    position={[-0.846, 0.46, 1.433]}
                    rotation={[Math.PI / 2, -0.885, 0]}
                    scale={0.664}
                />
                <mesh
                    name="Cylinder084"
                    geometry={nodes.Cylinder084.geometry}
                    material={materials["01"]}
                    position={[-0.782, 0.568, 1.433]}
                    rotation={[Math.PI / 2, -0.885, 0]}
                    scale={0.664}
                />
                <mesh
                    name="Cylinder085"
                    geometry={nodes.Cylinder085.geometry}
                    material={materials["01"]}
                    position={[-0.811, 0.511, 1.433]}
                    rotation={[Math.PI / 2, -0.885, 0]}
                    scale={0.664}
                />
                <mesh
                    name="Cylinder086"
                    geometry={nodes.Cylinder086.geometry}
                    material={materials["01"]}
                    position={[-0.948, 0.675, 0.866]}
                    rotation={[-Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder087"
                    geometry={nodes.Cylinder087.geometry}
                    material={materials["01"]}
                    position={[-0.982, 0.621, 0.866]}
                    rotation={[-Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder088"
                    geometry={nodes.Cylinder088.geometry}
                    material={materials["01"]}
                    position={[-1.016, 0.568, 0.866]}
                    rotation={[-Math.PI / 2, 0.565, Math.PI / 2]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder089"
                    geometry={nodes.Cylinder089.geometry}
                    material={materials["01"]}
                    position={[-0.836, 0.454, 1.088]}
                    rotation={[-Math.PI / 2, 0.565, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder090"
                    geometry={nodes.Cylinder090.geometry}
                    material={materials["01"]}
                    position={[-0.803, 0.506, 1.088]}
                    rotation={[-Math.PI / 2, 0.565, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder091"
                    geometry={nodes.Cylinder091.geometry}
                    material={materials["01"]}
                    position={[-0.773, 0.561, 1.088]}
                    rotation={[-Math.PI / 2, 0.565, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder092"
                    geometry={nodes.Cylinder092.geometry}
                    material={materials["01"]}
                    position={[-0.836, 0.454, 1.63]}
                    rotation={[-Math.PI / 2, 0.565, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder093"
                    geometry={nodes.Cylinder093.geometry}
                    material={materials["01"]}
                    position={[-0.803, 0.506, 1.63]}
                    rotation={[-Math.PI / 2, 0.565, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder094"
                    geometry={nodes.Cylinder094.geometry}
                    material={materials["01"]}
                    position={[-0.773, 0.561, 1.63]}
                    rotation={[-Math.PI / 2, 0.565, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder095"
                    geometry={nodes.Cylinder095.geometry}
                    material={materials["01"]}
                    position={[-0.846, 0.46, -1.43]}
                    rotation={[-Math.PI / 2, 0.885, -Math.PI]}
                    scale={-0.664}
                />
                <mesh
                    name="Cylinder096"
                    geometry={nodes.Cylinder096.geometry}
                    material={materials["01"]}
                    position={[-0.782, 0.568, -1.43]}
                    rotation={[-Math.PI / 2, 0.885, -Math.PI]}
                    scale={-0.664}
                />
                <mesh
                    name="Cylinder097"
                    geometry={nodes.Cylinder097.geometry}
                    material={materials["01"]}
                    position={[-0.811, 0.511, -1.43]}
                    rotation={[-Math.PI / 2, 0.885, -Math.PI]}
                    scale={-0.664}
                />
                <mesh
                    name="Cylinder098"
                    geometry={nodes.Cylinder098.geometry}
                    material={materials["01"]}
                    position={[-0.948, 0.675, -0.864]}
                    rotation={[Math.PI / 2, -0.565, -Math.PI / 2]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder099"
                    geometry={nodes.Cylinder099.geometry}
                    material={materials["01"]}
                    position={[-0.982, 0.621, -0.864]}
                    rotation={[Math.PI / 2, -0.565, -Math.PI / 2]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder100"
                    geometry={nodes.Cylinder100.geometry}
                    material={materials["01"]}
                    position={[-1.016, 0.568, -0.864]}
                    rotation={[Math.PI / 2, -0.565, -Math.PI / 2]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder101"
                    geometry={nodes.Cylinder101.geometry}
                    material={materials["01"]}
                    position={[-0.836, 0.454, -1.086]}
                    rotation={[Math.PI / 2, -0.565, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder102"
                    geometry={nodes.Cylinder102.geometry}
                    material={materials["01"]}
                    position={[-0.803, 0.506, -1.086]}
                    rotation={[Math.PI / 2, -0.565, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder103"
                    geometry={nodes.Cylinder103.geometry}
                    material={materials["01"]}
                    position={[-0.773, 0.561, -1.086]}
                    rotation={[Math.PI / 2, -0.565, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder104"
                    geometry={nodes.Cylinder104.geometry}
                    material={materials["01"]}
                    position={[-0.836, 0.454, -1.628]}
                    rotation={[Math.PI / 2, -0.565, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder105"
                    geometry={nodes.Cylinder105.geometry}
                    material={materials["01"]}
                    position={[-0.803, 0.506, -1.628]}
                    rotation={[Math.PI / 2, -0.565, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder106"
                    geometry={nodes.Cylinder106.geometry}
                    material={materials["01"]}
                    position={[-0.773, 0.561, -1.628]}
                    rotation={[Math.PI / 2, -0.565, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder107"
                    geometry={nodes.Cylinder107.geometry}
                    material={materials["01"]}
                    position={[-0.872, -0.405, 1.433]}
                    rotation={[Math.PI / 2, 0.838, -Math.PI]}
                    scale={-0.664}
                />
                <mesh
                    name="Cylinder108"
                    geometry={nodes.Cylinder108.geometry}
                    material={materials["01"]}
                    position={[-0.814, -0.516, 1.433]}
                    rotation={[Math.PI / 2, 0.838, -Math.PI]}
                    scale={-0.664}
                />
                <mesh
                    name="Cylinder109"
                    geometry={nodes.Cylinder109.geometry}
                    material={materials["01"]}
                    position={[-0.839, -0.457, 1.433]}
                    rotation={[Math.PI / 2, 0.838, -Math.PI]}
                    scale={-0.664}
                />
                <mesh
                    name="Cylinder110"
                    geometry={nodes.Cylinder110.geometry}
                    material={materials["01"]}
                    position={[-0.984, -0.615, 0.866]}
                    rotation={[-Math.PI / 2, -0.518, -Math.PI / 2]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder111"
                    geometry={nodes.Cylinder111.geometry}
                    material={materials["01"]}
                    position={[-1.016, -0.559, 0.866]}
                    rotation={[-Math.PI / 2, -0.518, -Math.PI / 2]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder112"
                    geometry={nodes.Cylinder112.geometry}
                    material={materials["01"]}
                    position={[-1.047, -0.505, 0.866]}
                    rotation={[-Math.PI / 2, -0.518, -Math.PI / 2]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder113"
                    geometry={nodes.Cylinder113.geometry}
                    material={materials["01"]}
                    position={[-0.862, -0.399, 1.088]}
                    rotation={[-Math.PI / 2, -0.518, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder114"
                    geometry={nodes.Cylinder114.geometry}
                    material={materials["01"]}
                    position={[-0.831, -0.452, 1.088]}
                    rotation={[-Math.PI / 2, -0.518, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder115"
                    geometry={nodes.Cylinder115.geometry}
                    material={materials["01"]}
                    position={[-0.804, -0.508, 1.088]}
                    rotation={[-Math.PI / 2, -0.518, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder116"
                    geometry={nodes.Cylinder116.geometry}
                    material={materials["01"]}
                    position={[-0.862, -0.399, 1.63]}
                    rotation={[-Math.PI / 2, -0.518, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder117"
                    geometry={nodes.Cylinder117.geometry}
                    material={materials["01"]}
                    position={[-0.831, -0.452, 1.63]}
                    rotation={[-Math.PI / 2, -0.518, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder118"
                    geometry={nodes.Cylinder118.geometry}
                    material={materials["01"]}
                    position={[-0.804, -0.508, 1.63]}
                    rotation={[-Math.PI / 2, -0.518, 0]}
                    scale={[0.016, 0.043, 0.016]}
                />
                <mesh
                    name="Cylinder119"
                    geometry={nodes.Cylinder119.geometry}
                    material={materials["01"]}
                    position={[-0.872, -0.405, -1.43]}
                    rotation={[-Math.PI / 2, -0.838, 0]}
                    scale={0.664}
                />
                <mesh
                    name="Cylinder120"
                    geometry={nodes.Cylinder120.geometry}
                    material={materials["01"]}
                    position={[-0.814, -0.516, -1.43]}
                    rotation={[-Math.PI / 2, -0.838, 0]}
                    scale={0.664}
                />
                <mesh
                    name="Cylinder121"
                    geometry={nodes.Cylinder121.geometry}
                    material={materials["01"]}
                    position={[-0.839, -0.457, -1.43]}
                    rotation={[-Math.PI / 2, -0.838, 0]}
                    scale={0.664}
                />
                <mesh
                    name="Cylinder122"
                    geometry={nodes.Cylinder122.geometry}
                    material={materials["01"]}
                    position={[-0.984, -0.615, -0.864]}
                    rotation={[Math.PI / 2, 0.518, Math.PI / 2]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder123"
                    geometry={nodes.Cylinder123.geometry}
                    material={materials["01"]}
                    position={[-1.016, -0.559, -0.864]}
                    rotation={[Math.PI / 2, 0.518, Math.PI / 2]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder124"
                    geometry={nodes.Cylinder124.geometry}
                    material={materials["01"]}
                    position={[-1.047, -0.505, -0.864]}
                    rotation={[Math.PI / 2, 0.518, Math.PI / 2]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder125"
                    geometry={nodes.Cylinder125.geometry}
                    material={materials["01"]}
                    position={[-0.862, -0.399, -1.086]}
                    rotation={[Math.PI / 2, 0.518, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder126"
                    geometry={nodes.Cylinder126.geometry}
                    material={materials["01"]}
                    position={[-0.831, -0.452, -1.086]}
                    rotation={[Math.PI / 2, 0.518, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder127"
                    geometry={nodes.Cylinder127.geometry}
                    material={materials["01"]}
                    position={[-0.804, -0.508, -1.086]}
                    rotation={[Math.PI / 2, 0.518, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder128"
                    geometry={nodes.Cylinder128.geometry}
                    material={materials["01"]}
                    position={[-0.862, -0.399, -1.628]}
                    rotation={[Math.PI / 2, 0.518, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder129"
                    geometry={nodes.Cylinder129.geometry}
                    material={materials["01"]}
                    position={[-0.831, -0.452, -1.628]}
                    rotation={[Math.PI / 2, 0.518, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder130"
                    geometry={nodes.Cylinder130.geometry}
                    material={materials["01"]}
                    position={[-0.804, -0.508, -1.628]}
                    rotation={[Math.PI / 2, 0.518, -Math.PI]}
                    scale={[-0.016, -0.043, -0.016]}
                />
                <mesh
                    name="Cylinder133"
                    geometry={nodes.Cylinder133.geometry}
                    material={materials["01"]}
                    position={[-0.572, 0.884, 0.768]}
                    rotation={[-Math.PI / 2, 0.565, -Math.PI]}
                    scale={[-0.027, -0.061, -0.027]}
                />
                <mesh
                    name="Cylinder134"
                    geometry={nodes.Cylinder134.geometry}
                    material={materials["01"]}
                    position={[-0.492, 0.936, 0.768]}
                    rotation={[-Math.PI / 2, 0.565, -Math.PI]}
                    scale={[-0.027, -0.061, -0.027]}
                />
                <mesh
                    name="Cylinder135"
                    geometry={nodes.Cylinder135.geometry}
                    material={materials["01"]}
                    position={[-0.572, 0.884, -0.333]}
                    rotation={[-Math.PI / 2, 0.565, -Math.PI]}
                    scale={[-0.027, -0.061, -0.027]}
                />
                <mesh
                    name="Cylinder136"
                    geometry={nodes.Cylinder136.geometry}
                    material={materials["01"]}
                    position={[-0.492, 0.936, -0.333]}
                    rotation={[-Math.PI / 2, 0.565, -Math.PI]}
                    scale={[-0.027, -0.061, -0.027]}
                />
                <mesh
                    name="Cylinder137"
                    geometry={nodes.Cylinder137.geometry}
                    material={materials.blk}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Cylinder138"
                    geometry={nodes.Cylinder138.geometry}
                    material={materials.blk}
                    position={[-0.82, -0.797, 0]}
                    rotation={[-Math.PI / 2, -0.767, 0]}
                    scale={[1, 1, 0.967]}
                />
                <mesh
                    name="Plane004"
                    geometry={nodes.Plane004.geometry}
                    material={materials.grl2}
                    position={[-0.799, -0.438, 1.031]}
                    rotation={[0, 0, -1.049]}
                    scale={-0.093}
                />
                <mesh
                    name="Plane005"
                    geometry={nodes.Plane005.geometry}
                    material={materials.grl2}
                    position={[-0.799, -0.438, 1.576]}
                    rotation={[0, 0, -1.049]}
                    scale={-0.093}
                />
                <mesh
                    name="Plane006"
                    geometry={nodes.Plane006.geometry}
                    material={materials.grl2}
                    position={[-0.799, -0.438, -1.576]}
                    rotation={[0, 0, -1.049]}
                    scale={-0.093}
                />
                <mesh
                    name="Plane007"
                    geometry={nodes.Plane007.geometry}
                    material={materials.grl2}
                    onBeforeRender={() => {
                        materials.grl2.emissiveIntensity = 0.8;
                    }}
                    position={[-0.799, -0.438, -1.031]}
                    rotation={[0, 0, -1.049]}
                    scale={-0.093}
                ></mesh>

                <mesh
                    name="Plane008"
                    geometry={nodes.Plane008.geometry}
                    material={materials.grl2}
                    position={[-0.772, 0.484, 1.031]}
                    rotation={[-Math.PI, 0, 2.092]}
                    scale={0.093}
                />
                <mesh
                    name="Plane009"
                    geometry={nodes.Plane009.geometry}
                    material={materials.grl2}
                    position={[-0.772, 0.484, 1.576]}
                    rotation={[-Math.PI, 0, 2.092]}
                    scale={0.093}
                />
                <mesh
                    name="Plane010"
                    geometry={nodes.Plane010.geometry}
                    material={materials.grl2}
                    position={[-0.772, 0.484, -1.576]}
                    rotation={[-Math.PI, 0, 2.092]}
                    scale={0.093}
                />
                <mesh
                    name="Plane011"
                    geometry={nodes.Plane011.geometry}
                    material={materials.grl2}
                    position={[-0.772, 0.484, -1.031]}
                    rotation={[-Math.PI, 0, 2.092]}
                    scale={0.093}
                />
            </group>
        </group>
    );
};

useGLTF.preload("/windows.glb");

export default Windows;
