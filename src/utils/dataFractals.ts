export const fractals = [
    {
        "name": "Мандельброт z2",
        "value": "newX=x*x-y*y+tx;newY=2.0*x*y+ty;"
    },
    {
        "name": "Мандельброт z3",
        "value": "newX=x*x*x-3.*x*y*y+tx;newY=3.*x*x*y-y*y*y+ty;"
    },
    {
        "name": "Мандельброт z4",
        "value": "newX=pow(x, 4.)-6.*x*x*y*y+pow(y,4.)+tx;newY=4.*pow(x,3.)*y-4.*x*y*y*y+ty;"
    },
    {
        "name": "Мандельброт z5",
        "value": "newX=pow(x,5.)-10.*x*x*x*y*y+5.*x*pow(y,4.)+tx;newY=5.*pow(x,4.)*y-10.*x*x*y*y*y+pow(y,5.)+ty;"
    },
    {
        "name": "Мандельброт z6",
        "value": "newX=pow(x,6.)-15.*pow(x,4.)*y*y+15.*x*x*pow(y,4.)-pow(y,6.)+tx;newY=6.*pow(x,5.)*y-20.*pow(x,3.)*y*y*y+6.*pow(y,5.)*x+ty;"
    },
    {
        "name": "Мандельброт z7",
        "value": "newX=pow(x,7.)-21.*pow(x,5.)*y*y+35.*pow(x,3.)*pow(y,4.)-7.*x*pow(y,6.)+tx;newY=7.*pow(x,6.)*y-35.*pow(x,4.)*pow(y,3.)+21.*pow(x,2.)*pow(y,5.)-pow(y,7.)+ty;"
    },
    {
        "name": "Мандельброт z2 cos(tx) sin(tx)",
        "value": "newX=x*x-y*y+cos(tx);newY=2.*x*y+sin(ty);"
    },
    {
        "name": "Мандельброт xycos(tx)",
        "value": "newX=2.*y*x*cos(2.*x)+tx;newY=2.*x*y*sin(2.*y)+ty;"
    },
    {
        "name": "Мандельброт cos(z)",
        "value": "newX=cos(x)*(exp(y)+exp(-y))/2.+tx;newY=-sin(x)*(exp(y)-exp(-y))/2.+ty;"
    },
    {
        "name": "Мандельброт sin(z)",
        "value": "newX=sin(x)*(exp(y)+exp(-y))/2.+tx;newY=cos(x)*(exp(y)-exp(-y))/2.+ty;"
    },
    {
        "name": "Мандельброт sin^2(z)",
        "value": "newX=float sfx=sin(x)*(exp(y)+exp(-y))/2.;float sfy=cos(x)*(exp(y)-exp(-y))/2.;newX=sfx*sfx-sfy*sfy+tx;newY=2.0*sfx*sfy+ty;"
    },
    {
        "name": "Мандельброт tg(z)",
        "value": "float c=cos(x);float s=sin(x);float e=exp(2.0*y);float r=exp(-2.0*y);newX = x*x-y*y+sin(2.0*x)/2.0/(c*c+(e+r-2.0)/4.0)+tx;newY=2.0*x*y+(e-r)/4.0/(c*c+(e+r-2.0)/4.0)+ty;"
    },
    {
        "name": "Мандельброт exp(z)",
        "value": "newX=exp(x)*cos(y)+tx;newY=exp(x)*sin(y)+ty;"
    },
    {
        "name": "Мандельброт exp(z) в движении",
        "value": "newX=0.5*log(x*x+y*y+0.0000001)+sin(0.25*uTime);newY=atan(y/(x+0.000001))+cos(PI/6.0*0.5*uTime);"
    },
    {
        "name": "Мандельброт z2/cos(z)",
        "value": "newX=x*x-y*y+x/cos(x*x+y*y)+tx;newY=2.*x*y-y/cos(x*x+y*y)+ty;"
    },
    {
        "name": "Мандельброт 1/z",
        "value": "newX=x/(x*x+y*y+0.000001)+tx;newY=-y/(x*x+y*y+0.000001)+ty;"
    },
    {
        "name": "Мандельброт heart",
        "value": "newX=x*x-y*y+x/cos(x*x+y*y)+tx;newY=2.*x*y-y/log(x*x+y*y)+ty;"
    },
    {
        "name": "Мандельброт xyPI",
        "value": "newX=x*y*cos(y*PI)+tx;newY=y*x*sin(x*PI)+ty;"
    },
    {
        "name": "Мандельброт --!z2",
        "value": "newX=x*x-y*y+tx;newY=-2.*x*y+ty;"
    },
    {
        "name": "Мандельброт A2",
        "value": "newX=x*x-y*y+cos(tx);newY=sin(y-x)*cos(x-y)+cos(ty);"
    },
    {
        "name": "Мандельброт A3",
        "value": "newX=y+cos(tx)*(tx)*(tx);newY=x+cos(ty)*(ty)*(ty);"
    },
    {
        "name": "Мандельброт A4",
        "value": "newX=cos(x)*x*x+cos(tx)*(tx)*(tx);newY=cos(y)*y*y+cos(ty)*(ty)*(ty);"
    },
    {
        "name": "Мандельброт A5",
        "value": "newX=exp(x*y)+cos(tx)*(tx)*(tx);newY=exp(y*x)+cos(ty)*(ty)*(ty);"
    },
    {
        "name": "Мандельброт A6",
        "value": "newX=exp(x*y)*cos(y*tx)+cos(tx)*(tx)*(tx);newY=exp(y*x)*cos(x*ty)+cos(ty)*(ty)*(ty);"
    },
    {
        "name": "Мандельброт A7",
        "value": "newX=x*x-y*y+x/log(x*x+y*y)+tx;newY=2.*x*y-y/log(x*x+y*y)+ty;"
    },
    {
        "name": "Мандельброт A8",
        "value": "newX=x*x-y*y+x/log(x*x+y*y)+cos(tx);newY=2.*x*y-y/log(x*x+y*y)+cos(ty);"
    },
    {
        "name": "Мандельброт A12",
        "value": "newX=x*(cos(x)*(exp(y)+exp(-y))/2.)+y*(sin(x)*(exp(y)-exp(-y))/2.)+x;newY=y*(cos(x)*(exp(y)+exp(-y))/2.)-x*(sin(x)*(exp(y)-exp(-y))/2.)+ ty;"
    },
    {
        "name": "Мандельброт A13",
        "value": "newX=x+cos(x)*(exp(y)+exp(-y))/2.+tx;newY=y-(sin(x)*(exp(y)-exp(-y))/2.)+ty;"
    },
    {
        "name": "Мандельброт A14",
        "value": "newX=x*x-y*y+cos(x)*(exp(y)+exp(-y))/2.+tx;newY=2.*x*y-(sin(x)*(exp(y)-exp(-y))/2.)+ty;"
    },
    {
        "name": "Мандельброт A15",
        "value": "newX=(x*x-y*y)*cos(x)*(exp(y)+exp(-y))/2.+2.*x*y*(sin(x)*(exp(y)-exp(-y))/2.)+tx;newY= 2.*x*y*(cos(x)*(exp(y)+exp(-y))/2.)-(x*x-y*y)*sin(x)*(exp(y)-exp(-y))/2.+ty;"
    },
    {
        "name": "Мандельброт A16",
        "value": "newX=(-x*x+y*y)*cos(x)*(exp(y)+exp(-y))/2.+2.*x*y*(sin(x)*(exp(y)-exp(-y))/2.)+tx;newY= 2.*x*y*(cos(x)*(exp(y)+exp(-y))/2.)-(-x*x+y*y)*sin(x)*(exp(y)-exp(-y))/2.+ty;"
    },
    {
        "name": "Мандельброт A17",
        "value": "newX=2./3.*x+(x*x-y*y)/(3.*(x*x+y*y)*(x*x+y*y))+log(tx);newY= 2./3.*y-(2.*x*y)/(3.*(x*x+y*y)*(x*x+y*y))+ty;"
    },
    {
        "name": "Мандельброт A18",
        "value": "newX=2./3.*x+(x*x-y*y)/(3.*(x*x+y*y)*(x*x+y*y));newY= 2./3.*y-(2.*x*y)/(3.*(x*x+y*y)*(x*x+y*y));"
    },
    {
        "name": "Мандельброт A19",
        "value": "newX=3./4.*x+3./4.*(x*x*x*x-6.*x*x*y*y+y*y*y*y)/(pow((x*x+y*y),3.));newY= 3./4.*y+3./4.*(4.*x*y*y*y-4.*x*x*x*y)/(pow((x*x+y*y),3.));"
    },
    {
        "name": "Мандельброт A20",
        "value": "newX=x+sin(2.*x)/2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+tx;newY= y-(exp(2.*y)-exp(-2.*y))/2./2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+ty;"
    },
    {
        "name": "JA20",
        "value": "newX=x+sin(2.*x)/2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+sin(0.25*uTime)*1.0-0.20;newY= y-(exp(2.*y)-exp(-2.*y))/2./2./(sin(x)*sin(x)*(exp(y)+exp(-y))/2.*(exp(y)+exp(-y))/2.+cos(x)*cos(x)*(exp(y)-exp(-y))/2.*(exp(y)-exp(-y))/2.)+cos(PI/6.0*0.5*uTime)*1.0+0.20;"
    },
    {
        "name": "M--z",
        "value": "newX=x*2.+cos(tx);newY=2.*y+sin(ty);"
    },
    {
        "name": "M--z2--move",
        "value": "newX=x*x-y*y+tx*(sin(uTime));newY= 2.*x*y+ty*(cos(uTime));"
    },
    {
        "name": "M--z2--cos--move",
        "value": "newX=x*x-y*y-x*(sin(uTime+ty));newY= 2.*x*y-y*(cos(uTime+tx));"
    },
    {
        "name": "M--z2--t*cos--move",
        "value": "newX=x*x-y*y-x*(sin(uTime+tx));newY= 2.*x*y-ty*(cos(uTime+ty));"
    },
    {
        "name": "M--z2--t*cos--wave-move",
        "value": "newX=x*x-y*y+tx+(sin(1.0*uTime+tx));newY= 2.*x*y+ty+(cos(1.0*uTime+tx));"
    },
    {
        "name": "M--z2--cos",
        "value": "newX=x*x-y*y+(cos(tx));newY=2.*x*y+(sin(ty));"
    },
    {
        "name": "M--1",
        "value": "newX=(x*x-y*y)*(cos(x)*(exp(2.*y)+exp(-2.*y))/2.) +2.*x*y*sin(x)*(exp(2.*y)-exp(-2.*y))/2.+tx;newY= 2.*x*y*cos(x)*(exp(2.*y)+exp(-2.*y))/2.-(x*x-y*y)*sin(x)*(exp(2.*y)-exp(-2.*y))/2.+ty;"
    },
    {
        "name": "J2",
        "value": "newX=x*x-y*y+0.02;newY= 2.0*x*y+0.02;"
    },
    {
        "name": "J3",
        "value": "newX=x*x*x-3.0*x*y*y+0.02;newY=3.0*x*x*y-y*y*y+0.02;"
    },
    {
        "name": "JA20",
        "value": "newX=4./5.*x-(x*x*x*x-6.0*x*x*y*y+y*y*y*y)/(5.* pow((x*x+y*y), 4.0))-0.02;newY= 4./5.*y+(4.0*x*x*x*y-4.0*x*y*y*y)/(5.* pow((x*x+y*y), 4.0))-0.02;"
    },
    {
        "name": "JcosZ",
        "value": "newX=cos(x)*(exp(y)+exp(-y))/2.-0.02;newY=-sin(x)*(exp(y)-exp(-y))/2.-0.02;"
    },
    {
        "name": "JtgZ--move",
        "value": "float c=cos(x);float s=sin(x);float e=exp(2.0*y);float r=exp(-2.0*y);newX=x*x-y*y+sin(2.0*x)/2.0/(c*c+(e+r-2.0)/4.0)+sin(0.25*uTime);newY=2.0*x*y+(e-r)/4.0/(c*c+(e+r-2.0)/4.0)+cos(PI/6.0*0.5*uTime);"
    },
    {
        "name": "z2+z",
        "value": "newX=x*x-y*y-x+tx;newY=2.0*x*y+y+ty;"
    },
    {
        "name": "z/(cosZ+i*sinZ)",
        "value": "newX=exp(y)*(x*cos(x)+y*sin(x))+tx;newY=exp(y)*(y*cos(x)-x*sin(x))+ty;"
    },
];

export const motions = [
    {
        "name": "Без анимации",
        "value": ";"
    },
    {
        "name": "Loop",
        "value": "float r=(tx-0.5*sin(speedMotion*uTime))*(tx-0.5*sin(speedMotion*uTime))+(ty-cos(speedMotion*uTime))*(ty-cos(speedMotion*uTime));if (r<0.25){tx=(0.4+0.6*(2.0*r))*(tx-0.5*sin(speedMotion*uTime))+0.5*sin(speedMotion*uTime);ty=(0.4+0.6*(2.0*r))*(ty-cos(speedMotion*uTime))+cos(speedMotion*uTime);}';"
    },
    {
        "name": "rot",
        "value": "float tmp = tx;tx = cos(speedMotion*uTime)*tx - sin(speedMotion*uTime)*ty;ty = sin(speedMotion*uTime)*tmp + cos(speedMotion*uTime)*ty;"
    },
    {
        "name": "14N",
        "value": "float tmpy=y; float tmp=x;x=cos(speedMotion*uTime)*(x)-sin(speedMotion*uTime)*(y);y=sin(speedMotion*uTime)*(tmp) + cos(speedMotion*uTime)*(y);x=1.0/exp(uTime)*x;y=1.0/exp(uTime)*y;"
    },
    {
        "name": "16",
        "value": "float tmp=tx;float c=cos(0.1*uTime)/(1.0+exp(-6.0*sin(0.1*uTime)));float p=c+sin(0.1*uTime), q=c+cos(0.1*uTime);tx=cos(speedMotion*uTime)*(tx-p) - sin(speedMotion*uTime)*(ty-q)+p;ty=sin(speedMotion*uTime)*(tmp-p) + cos(speedMotion*uTime)*(ty-q)+q;tx=1.0/pow(1.15,uTime)*(tx-p)+p;ty=1.0/pow(1.15,uTime)*(ty-q)+q;"
    }
];

export const colorStyles = [
    {
        "name": "gamma",
        "value": "r=1.0-mod(float(i),3.0)*127.0/255.0;g=1.0-mod(float(i)/3.0,3.0)*127.0/255.0;b=1.0-mod(float(i)/9.0,3.0)*127.0/255.0;"
    },
    {
        "name": "gammaLite",
        "value": "r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));"
    },
];

export const norms = [
    {
        "name": "Evklid",
        "value": "(x*x+y*y)>100.0"
    },
    {
        "name": "QEvklid",
        "value": "(x*x*y*y)>100.0"
    },
]