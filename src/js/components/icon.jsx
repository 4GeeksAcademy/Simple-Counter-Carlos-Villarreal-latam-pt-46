import {library} from "@fortawesome/fontawesome-svg-core";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faClock);
export const Icon = () => <FontAwesomeIcon icon={faClock} />;