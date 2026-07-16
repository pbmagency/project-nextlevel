import { c as Button } from "../ssr.js";
import { t as Label } from "./label-BaWLt1lx.js";
import { t as InputError } from "./input-error-BatYTnXy.js";
import { t as PasswordInput } from "./password-input-BRb1ez3Y.js";
import { t as Spinner } from "./spinner-CFNrPrW8.js";
import { n as store } from "./confirm-1vl-l25H.js";
import { Form, Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/auth/confirm-password.tsx
function ConfirmPassword() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: "Confirm password" }), /* @__PURE__ */ jsx(Form, {
		...store.form(),
		resetOnSuccess: ["password"],
		children: ({ processing, errors }) => /* @__PURE__ */ jsxs("div", {
			className: "space-y-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ jsx(Label, {
						htmlFor: "password",
						children: "Password"
					}),
					/* @__PURE__ */ jsx(PasswordInput, {
						id: "password",
						name: "password",
						placeholder: "Password",
						autoComplete: "current-password",
						autoFocus: true
					}),
					/* @__PURE__ */ jsx(InputError, { message: errors.password })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex items-center",
				children: /* @__PURE__ */ jsxs(Button, {
					className: "w-full",
					disabled: processing,
					"data-test": "confirm-password-button",
					children: [processing && /* @__PURE__ */ jsx(Spinner, {}), "Confirm password"]
				})
			})]
		})
	})] });
}
ConfirmPassword.layout = {
	title: "Confirm your password",
	description: "This is a secure area of the application. Please confirm your password before continuing."
};
//#endregion
export { ConfirmPassword as default };

//# sourceMappingURL=confirm-password-DULZf6Mr.js.map