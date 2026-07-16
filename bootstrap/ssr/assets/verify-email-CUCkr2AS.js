import { a as applyUrlDefaults, c as Button, o as queryParams, r as logout } from "../ssr.js";
import { t as Spinner } from "./spinner-CFNrPrW8.js";
import { t as TextLink } from "./text-link-DcJ3EN7V.js";
import { Form, Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/routes/verification/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
var notice = (options) => ({
	url: notice.url(options),
	method: "get"
});
notice.definition = {
	methods: ["get", "head"],
	url: "/email/verify"
};
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
notice.url = (options) => {
	return notice.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
notice.get = (options) => ({
	url: notice.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
notice.head = (options) => ({
	url: notice.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
var noticeForm = (options) => ({
	action: notice.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
noticeForm.get = (options) => ({
	action: notice.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
noticeForm.head = (options) => ({
	action: notice.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
notice.form = noticeForm;
/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
var verify = (args, options) => ({
	url: verify.url(args, options),
	method: "get"
});
verify.definition = {
	methods: ["get", "head"],
	url: "/email/verify/{id}/{hash}"
};
/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
verify.url = (args, options) => {
	if (Array.isArray(args)) args = {
		id: args[0],
		hash: args[1]
	};
	args = applyUrlDefaults(args);
	const parsedArgs = {
		id: args.id,
		hash: args.hash
	};
	return verify.definition.url.replace("{id}", parsedArgs.id.toString()).replace("{hash}", parsedArgs.hash.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
verify.get = (args, options) => ({
	url: verify.url(args, options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
verify.head = (args, options) => ({
	url: verify.url(args, options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
var verifyForm = (args, options) => ({
	action: verify.url(args, options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
verifyForm.get = (args, options) => ({
	action: verify.url(args, options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
verifyForm.head = (args, options) => ({
	action: verify.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
verify.form = verifyForm;
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController::send
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationNotificationController.php:19
* @route '/email/verification-notification'
*/
var send = (options) => ({
	url: send.url(options),
	method: "post"
});
send.definition = {
	methods: ["post"],
	url: "/email/verification-notification"
};
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController::send
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationNotificationController.php:19
* @route '/email/verification-notification'
*/
send.url = (options) => {
	return send.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController::send
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationNotificationController.php:19
* @route '/email/verification-notification'
*/
send.post = (options) => ({
	url: send.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController::send
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationNotificationController.php:19
* @route '/email/verification-notification'
*/
var sendForm = (options) => ({
	action: send.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController::send
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationNotificationController.php:19
* @route '/email/verification-notification'
*/
sendForm.post = (options) => ({
	action: send.url(options),
	method: "post"
});
send.form = sendForm;
Object.assign(notice, notice), Object.assign(verify, verify), Object.assign(send, send);
//#endregion
//#region resources/js/pages/auth/verify-email.tsx
function VerifyEmail({ status }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title: "Email verification" }),
		status === "verification-link-sent" && /* @__PURE__ */ jsx("div", {
			className: "mb-4 text-center text-sm font-medium text-green-600",
			children: "A new verification link has been sent to the email address you provided during registration."
		}),
		/* @__PURE__ */ jsx(Form, {
			...send.form(),
			className: "space-y-6 text-center",
			children: ({ processing }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Button, {
				disabled: processing,
				variant: "secondary",
				children: [processing && /* @__PURE__ */ jsx(Spinner, {}), "Resend verification email"]
			}), /* @__PURE__ */ jsx(TextLink, {
				href: logout(),
				className: "mx-auto block text-sm",
				children: "Log out"
			})] })
		})
	] });
}
VerifyEmail.layout = {
	title: "Verify email",
	description: "Please verify your email address by clicking on the link we just emailed to you."
};
//#endregion
export { VerifyEmail as default };

//# sourceMappingURL=verify-email-CUCkr2AS.js.map