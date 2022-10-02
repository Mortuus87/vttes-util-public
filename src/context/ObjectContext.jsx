import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ObjectContext = React.createContext([null, () => {}]);

export const ObjectProvider = (props) => {
	const [obj, setObj] = useLocalStorage("object", null);
	return <ObjectContext.Provider value={[obj, setObj]}>{props.children}</ObjectContext.Provider>;
};

export default ObjectContext;