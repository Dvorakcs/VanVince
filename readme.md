🎬 Roadmap – Timeline de Edição de Vídeo


📌 Fase 1 – Estrutura Básica

    ✅  🖼️ Criar Canvas da timeline com largura proporcional à duração do vídeo

    ✅  ⏱️ Implementar escala de tempo (segundos/minutos)

    🔜  🎞️ Adicionar faixa principal de vídeo (track base)

    🔜  📍 Implementar playhead (linha vermelha da posição atual)

    🔜  🔗 Sincronizar playhead com o player de preview

📌 Fase 2 – Clips e Cortes

    📦 Estrutura de dados para clipes (startTime, endTime)

    🎨 Renderizar clipes como blocos coloridos na faixa

    🖱️ Drag & Drop para mover clipes

    ↔️ Resize handles para cortar início/fim dos clipes

    🧲 Implementar snapping (alinhamento automático no tempo)

📌 Fase 3 – Interatividade Avançada

    🔍 Zoom na timeline (scroll/pinch)

    ↔️ Scroll horizontal para vídeos longos

    📏 Marcadores de corte independentes (linhas verticais)

    💬 Tooltip de tempo ao passar o mouse

📌 Fase 4 – Visualização

    🖼️ Miniaturas do vídeo ao longo da timeline

    🎵 Faixas separadas para vídeo e áudio

    🌊 Renderizar forma de onda (waveform) do áudio

    🎨 Diferenciar por cores de mídia (vídeo, áudio, legendas)

📌 Fase 5 – Usabilidade e UX

    ⌨️ Atalhos de teclado (espaço = play/pause, setas = mover playhead)

    🖥️ Zoom-to-fit (ajusta timeline para caber na tela)

    🔄 Undo/Redo para ações de corte/movimento

    🖱️ Multi-seleção de clipes (Shift+Click)

📌 Fase 6 – Integração

    📤 Exportar cortes em JSON

    🌐 Enviar cortes para a API de processamento

    📥 Atualizar timeline com clipes processados

    🎬 Preview em tempo real ao clicar na timeline

📌 Fase 7 – Profissionalização

    🎚️ Suporte a múltiplas tracks (vídeo, áudio, overlays)

    🪄 Camadas (ordem de exibição, clipe acima prevalece)

    🎭 Transições (crossfade, corte seco)

    🎛️ Suporte a keyframes (volume, opacidade, posição)


✨ Sugestão de uso:

Marque ✅ quando terminar cada item.

Use 🔜 para indicar o que está em progresso.





| Recurso / Funcionalidade                   | Categoria         | Badge de Status                                               |
| ------------------------------------------ | ----------------- | ------------------------------------------------------------- |
| Canvas da timeline                         | MVP               | ![MVP](https://img.shields.io/badge/MVP-Basic-blue)           |
| Escala de tempo (segundos/minutos)         | MVP               | ![MVP](https://img.shields.io/badge/MVP-Basic-blue)           |
| Faixa única de vídeo                       | MVP               | ![MVP](https://img.shields.io/badge/MVP-Basic-blue)           |
| Playhead (linha de reprodução)             | MVP               | ![MVP](https://img.shields.io/badge/MVP-Basic-blue)           |
| Drag & drop de clipes                      | Semi-profissional | ![Semi](https://img.shields.io/badge/Semi-Interactive-orange) |
| Redimensionamento de clipes                | Semi-profissional | ![Semi](https://img.shields.io/badge/Semi-Interactive-orange) |
| Snapping / alinhamento automático          | Semi-profissional | ![Semi](https://img.shields.io/badge/Semi-Interactive-orange) |
| Miniaturas do vídeo (frames)               | Semi-profissional | ![Semi](https://img.shields.io/badge/Semi-Interactive-orange) |
| Scroll horizontal na timeline              | Semi-profissional | ![Semi](https://img.shields.io/badge/Semi-Interactive-orange) |
| Zoom in/out da timeline                    | Semi-profissional | ![Semi](https://img.shields.io/badge/Semi-Interactive-orange) |
| Multi-track (áudio, overlays, vídeo)       | Profissional      | ![Pro](https://img.shields.io/badge/Pro-Advanced-red)         |
| Undo / Redo                                | Profissional      | ![Pro](https://img.shields.io/badge/Pro-Advanced-red)         |
| Marcadores de corte independentes          | Semi-profissional | ![Semi](https://img.shields.io/badge/Semi-Interactive-orange) |
| Waveform do áudio                          | Profissional      | ![Pro](https://img.shields.io/badge/Pro-Advanced-red)         |
| Preview em tempo real ao arrastar playhead | Profissional      | ![Pro](https://img.shields.io/badge/Pro-Advanced-red)         |
| Transições entre clipes (crossfade, etc.)  | Profissional      | ![Pro](https://img.shields.io/badge/Pro-Advanced-red)         |
| Keyframes (volume, posição, opacidade)     | Profissional      | ![Pro](https://img.shields.io/badge/Pro-Advanced-red)         |
| Exportação de cortes / JSON                | Semi-profissional | ![Semi](https://img.shields.io/badge/Semi-Interactive-orange) |
| Interface de menus e botões (HTML)         | MVP               | ![MVP](https://img.shields.io/badge/MVP-Basic-blue)           |
