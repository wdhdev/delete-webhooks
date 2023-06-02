const form = document.getElementById("form");
const webhook = document.getElementById("webhook");
const btn = document.getElementById("btn");

async function deleteWebhook() {
    event.preventDefault();

    if(!webhook.value.startsWith("https://discord.com/api/webhooks/")) {
        alert("Please enter a valid Discord webhook URL!");
        form.reset();
        return;
    }

    btn.setAttribute("disabled", true);
    btn.innerHTML = "Deleting...";

    fetch(webhook.value, {
        method: "DELETE"
    }).catch(() => { alert("An error occurred!"); }).then(res => {
        form.reset();

        btn.removeAttribute("disabled");
        btn.innerHTML = "Delete";

        if(res) {
            if(res.status === 204) {
                alert("Webhook has been deleted!");
            } else {
                alert("Webhook does not exist!");
            }
        }
    })
}
