import {ELibraryWrapper, ELHead} from './ELibraryElementsents';
import ELIntro from '../ELibraryComponents/ELIntro';
import ELImage from '../ELibraryComponents/ELImage'



const ELibrary = () => {
    return ( 
        <ELibraryWrapper>
            <ELHead>
                <ELIntro />
                <ELImage />
            </ELHead>

        </ELibraryWrapper>
     );
}
 
export default ELibrary;