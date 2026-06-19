(() => {
    const siteKey = "6LckgMcsAAAAAA_8YYlozDPT_Tp-hYrI6w70TE1M";
    const action = "inquiry_submit";

    function setSubmitting(form, isSubmitting) {
        form.dataset.recaptchaSubmitting = isSubmitting ? "true" : "false";
        form.querySelectorAll('button[type="submit"], input[type="submit"]').forEach(
            (submitter) => {
                submitter.disabled = isSubmitting;
            }
        );
    }

    function tokenInputFor(form) {
        let input = form.querySelector('input[name="recaptcha_token"]');

        if (!input) {
            input = document.createElement("input");
            input.type = "hidden";
            input.name = "recaptcha_token";
            form.appendChild(input);
        }

        return input;
    }

    function submitWithRecaptcha(event) {
        const form = event.currentTarget;

        if (form.dataset.recaptchaSubmitting === "true") {
            event.preventDefault();
            return;
        }

        event.preventDefault();
        setSubmitting(form, true);

        if (!window.grecaptcha) {
            setSubmitting(form, false);
            window.alert("reCAPTCHAの読み込みに失敗しました。もう一度お試しください。");
            return;
        }

        window.grecaptcha.ready(() => {
            window.grecaptcha
                .execute(siteKey, { action })
                .then((token) => {
                    tokenInputFor(form).value = token;
                    HTMLFormElement.prototype.submit.call(form);
                })
                .catch(() => {
                    setSubmitting(form, false);
                    window.alert(
                        "reCAPTCHA認証に失敗しました。もう一度お試しください。"
                    );
                });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        document
            .querySelectorAll('form[action="https://vision-up.app/inquiries"]')
            .forEach((form) => {
                form.addEventListener("submit", submitWithRecaptcha);
            });
    });
})();
