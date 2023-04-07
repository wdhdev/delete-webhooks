const form = document.getElementById("form");
const webhook = document.getElementById("webhook");
const btn = document.getElementById("btn");

async function deleteWebhook() {
    event.preventDefault();

    if(!webhook.value.startsWith("https://discord.com/api/webhooks/")) return alert("Please enter a valid Discord webhook URL!");

    btn.setAttribute("disabled", true);
    btn.innerHTML = "Deleting...";

    try {
        fetch(webhook.value, {
            method: "DELETE"
        }).then(res => {
            form.reset();

            btn.removeAttribute("disabled");
            btn.innerHTML = "Delete";

            if(res.status === 204) {
                alert("Webhook has been deleted!");
            } else {
                alert("Webhook does not exist!");
            }
        })
    } catch(err) {
        alert("An error occurred!");
    }
}
