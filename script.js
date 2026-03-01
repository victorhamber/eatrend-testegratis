async function handleTrkSubmit(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button[type="submit"]');
  var originalText = btn.innerText;
  btn.disabled = true;
  btn.innerText = 'Enviando...';

  var data = {};
  var nameInput = form.fullname || form.name || form.fn;
  if (nameInput && nameInput.value) {
    var fullName = nameInput.value.trim().toLowerCase();
    var parts = fullName.split(/\s+/);
    data.fn = parts[0];
    if (parts.length > 1) data.ln = parts.slice(1).join(' ');
  }
  if (form.email && form.email.value) data.email = form.email.value.trim().toLowerCase();
  var ddi = form.ddi ? form.ddi.value : '+55';
  var ddiDigits = (ddi || '').toString().replace(/[^0-9]/g, '');
  if (!ddiDigits) ddiDigits = '55';
  var phoneRaw = form.phone ? form.phone.value : '';
  var phoneDigits = (phoneRaw || '').toString().replace(/[^0-9]/g, '');
  if (phoneDigits) data.phone = '+' + ddiDigits + phoneDigits;

  var eventId = 'evt_' + Math.floor(Date.now() / 1000) + '_' + Math.random().toString(36).slice(2);
  data.event_id = eventId;
  data.tracked_by_frontend = !!window.tracker;

  if (window.tracker) {
    window.tracker.identify(data);
    var evtData = { event_id: eventId };
    evtData.value = 3.01;
    evtData.currency = 'BRL';
    window.tracker.track('Cadastro_Grupo', evtData);
  }

  try {
    var res = await fetch('https://api.trajettu.com/public/forms/1f667902-3ddb-4bae-987b-23a9357c39d9/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    var json = await res.json();

    if (json.action === 'redirect' && json.redirect_url) {
      window.location.href = json.redirect_url;
    } else if (json.message) {
      form.innerHTML = '<div style="padding:20px; text-align:center; color:#fff;">' + json.message + '</div>';
    } else {
       form.reset();
       alert('Enviado com sucesso!');
       btn.disabled = false;
       btn.innerText = originalText;
    }
  } catch (err) {
    console.error(err);
    alert('Erro ao enviar. Tente novamente.');
    btn.disabled = false;
    btn.innerText = originalText;
  }
}
