registerPaint(
  'grid-background',
  class {
    static get inputProperties() {
      return ['--grid-background-surface', '--grid-background-color'];
    }

    paint(ctx, geom, props) {
      const { width, height } = geom;
      const horizontalLines = Array(Math.round((width + 50) / 70));
      const verticalLines = Array(Math.round((height + 50) / 70));

      ctx.fillStyle = props.get('--grid-background-surface');
      ctx.strokeStyle = props.get('--grid-background-color');

      ctx.fillRect(0, 0, width, height);

      Array.from(horizontalLines, (_, i) => i).forEach((i) => {
        ctx.beginPath();
        ctx.moveTo(i * 70 + 30, 0);
        ctx.lineTo(i * 70 + 10, height);
        ctx.stroke();
        ctx.closePath();
      });

      Array.from(verticalLines, (_, i) => i).forEach((i) => {
        ctx.beginPath();
        ctx.moveTo(0, i * 70 + 10);
        ctx.lineTo(width, i * 70 + 40);
        ctx.stroke();
        ctx.closePath();
      });

      ctx.fill();
      ctx.restore();
    }
  },
);
