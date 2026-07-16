import { c as Button, i as register, o as queryParams, s as Input } from "../ssr.js";
import { t as Checkbox } from "./checkbox-BcraPnnw.js";
import { t as Label } from "./label-BaWLt1lx.js";
import { t as InputError } from "./input-error-BatYTnXy.js";
import { t as PasswordInput } from "./password-input-BRb1ez3Y.js";
import { t as Spinner } from "./spinner-CFNrPrW8.js";
import { t as TextLink } from "./text-link-DcJ3EN7V.js";
import { n as request } from "./password-Dxlvq0B6.js";
import { Form, Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/routes/login/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/login"
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::store
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:58
* @route '/login'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
Object.assign(store, store);
//#endregion
//#region resources/js/pages/auth/login.tsx
function Login({ status, canResetPassword, canRegister }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title: "Log in" }),
		/* @__PURE__ */ jsx(Form, {
			...store.form(),
			resetOnSuccess: ["password"],
			className: "flex flex-col gap-6",
			children: ({ processing, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ jsx(Label, {
								htmlFor: "email",
								children: "Email address"
							}),
							/* @__PURE__ */ jsx(Input, {
								id: "email",
								type: "email",
								name: "email",
								required: true,
								autoFocus: true,
								tabIndex: 1,
								autoComplete: "email",
								placeholder: "email@example.com"
							}),
							/* @__PURE__ */ jsx(InputError, { message: errors.email })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ jsx(Label, {
									htmlFor: "password",
									children: "Password"
								}), canResetPassword && /* @__PURE__ */ jsx(TextLink, {
									href: request(),
									className: "ml-auto text-sm",
									tabIndex: 5,
									children: "Forgot password?"
								})]
							}),
							/* @__PURE__ */ jsx(PasswordInput, {
								id: "password",
								name: "password",
								required: true,
								tabIndex: 2,
								autoComplete: "current-password",
								placeholder: "Password"
							}),
							/* @__PURE__ */ jsx(InputError, { message: errors.password })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center space-x-3",
						children: [/* @__PURE__ */ jsx(Checkbox, {
							id: "remember",
							name: "remember",
							tabIndex: 3
						}), /* @__PURE__ */ jsx(Label, {
							htmlFor: "remember",
							children: "Remember me"
						})]
					}),
					/* @__PURE__ */ jsxs(Button, {
						type: "submit",
						className: "mt-4 w-full",
						tabIndex: 4,
						disabled: processing,
						"data-test": "login-button",
						children: [processing && /* @__PURE__ */ jsx(Spinner, {}), "Log in"]
					})
				]
			}), canRegister && /* @__PURE__ */ jsxs("div", {
				className: "text-center text-sm text-muted-foreground",
				children: [
					"Don't have an account?",
					" ",
					/* @__PURE__ */ jsx(TextLink, {
						href: register(),
						tabIndex: 5,
						children: "Sign up"
					})
				]
			})] })
		}),
		status && /* @__PURE__ */ jsx("div", {
			className: "mb-4 text-center text-sm font-medium text-green-600",
			children: status
		})
	] });
}
Login.layout = {
	title: "Log in to your account",
	description: "Enter your email and password below to log in"
};
//#endregion
export { Login as default };

//# sourceMappingURL=login-CfIe7Uls.js.map