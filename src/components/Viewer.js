import {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, } from "@react-three/drei";
import Model from "./Model";

const Viewer= ({modelurl}) => {
    return (
        <Canvas style={{ width: '100%', height: '100%' }}>
            <ambientLight />
            <pointLight position={[10,10,10]} />
            <Suspense fallback={null}>
                <Center disableY={false} fit>
                    <Model url={modelurl} />
                </Center>
            </Suspense>
            <OrbitControls makeDefault/>
        </Canvas>
    );
}

export default Viewer;