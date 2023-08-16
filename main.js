
function preload()
{

}

function setup()
{
    canvas = creatCanvas(640, 480)
    canvas.position(110, 250);
    video = creatCapture(VIDEO);
    viedo.hide();

    tint_color = "";
}

function draw()
{
    image(viedo, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot()
{
    save('my_app_img.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}