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

        const date1 = form.querySelector('input[name="inquiry[date_1]"]');
        if (date1) {
            const time1 = form.querySelector('select[name="inquiry[time_1]"]');
            const date2 = form.querySelector('input[name="inquiry[date_2]"]');
            const time2 = form.querySelector('select[name="inquiry[time_2]"]');
            const message = form.querySelector('textarea[name="inquiry[message]"]');
            
            if (date1.value || (date2 && date2.value)) {
                let appendedDates = "==============================\n";
                if (date1.value) appendedDates += `【第一希望日時】 ${date1.value} ${time1 ? time1.value : ''}〜\n`;
                if (date2 && date2.value) appendedDates += `【第二希望日時】 ${date2.value} ${time2 ? time2.value : ''}〜\n`;
                appendedDates += "\n";
                
                if (message && !message.value.includes("【第一希望日時】")) {
                    message.value = appendedDates + message.value + "\n==============================";
                }
            }
        }

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
