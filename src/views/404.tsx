import React from "react";

export interface IProps {}
export interface IState {}

let Error404: React.FC<IProps> = () => {
 	return (
    	<>
			<h1>Page not found</h1>
    	</>
  	)
}

export default Error404;