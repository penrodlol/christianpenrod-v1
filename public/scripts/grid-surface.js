registerPaint(
  'grid-surface',
  class {
    static get inputProperties() {
      return ['--grid-surface', '--grid-surface-lines'];
    }

    paint(ctx, geom, props) {
      const { width, height } = geom;
      const horizontalLines = Array(Math.round((width + 50) / 70));
      const verticalLines = Array(Math.round((height + 50) / 70));

      ctx.fillStyle = props.get('--grid-surface');
      ctx.strokeStyle = props.get('--grid-surface-lines');

      ctx.fillRect(0, 0, width, height);

      Array.from(horizontalLines, (_, i) => i).forEach((i) => {
        ctx.beginPath();
        ctx.moveTo(i * 70, 0);
        ctx.lineTo(i * 70, height);
        ctx.stroke();
        ctx.closePath();
      });

      Array.from(verticalLines, (_, i) => i).forEach((i) => {
        ctx.beginPath();
        ctx.moveTo(0, i * 70);
        ctx.lineTo(width, i * 70);
        ctx.stroke();
        ctx.closePath();
      });

      ctx.fill();
      ctx.restore();
    }
  },
);
