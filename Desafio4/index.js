const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rota para enviar notificações
app.post('/send-notification', (req, res) => {
  // Aqui você pode implementar a lógica para enviar notificações aos Employees
  // Lembre-se de registrar métricas para o monitoramento em tempo real.
  console.log('Notificação enviada:', req.body);
  res.status(200).json({ message: 'Notificação enviada com sucesso' });
});

app.listen(port, () => {
  console.log(`Micro-serviço de notificação está rodando na porta ${port}`);
});
