import { TextureLoader } from "three";
import { SUN_RADIUS } from "@/lib/utils/constants";
import { useLoader } from "@react-three/fiber";

const Sun = () => {
    const texture = useLoader(TextureLoader, "/assets/img/sun_texture.jpg");

    return (
        <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[SUN_RADIUS * 1, 32, 32]} />
            <meshStandardMaterial
                map={texture}
                emissive="orange"
                emissiveIntensity={20}
                emissiveMap={texture}
            />
        </mesh>
    );
};

export default Sun;
