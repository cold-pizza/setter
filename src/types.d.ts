// import { RouteComponentProps } from "react-router";

import React from "react";

export type OnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    state: null | {},
    setState: SetStateAction
) => void;

export interface LoginIprops {
    loginState: null | {};
}

export interface SignUpIprops {
    signUpState: null | {};
}
