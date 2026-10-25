/* Edit these two links only. */
window.SITE_CONFIG={
  PAYMENT_URL:"https://rzp.io/rzp/I55KGouj",
  DOWNLOAD_URL:"https://drive.google.com/file/d/1Uz7m-vsDInsWVukPRKUDXfvn9K3hIuEP/view?usp=drivesdk"
};
document.querySelectorAll("[data-pay]").forEach(function(a){a.href=SITE_CONFIG.PAYMENT_URL});
document.querySelectorAll("[data-download]").forEach(function(a){a.href=SITE_CONFIG.DOWNLOAD_URL});
