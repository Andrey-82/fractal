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
        "value": "newX=float sx=sin(x)*(exp(y)+exp(-y))/2.;float sy=cos(x)*(exp(y)-exp(-y))/2.;newX=sx*sx-sy*sy+tx;newY=2.0*sx*sy+ty;"
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
        "name": "gamma2",
        "value": "r = 1.0-abs(sin(mod(float(i),3.0)*127.0));g = 1.0-abs(sin(mod(float(i)/3.0,3.0)*127.0));b = 1.0-abs(sin(mod(float(i)/9.0,3.0)*127.0));"
    },
    {
        "name": "gamma3",
        "value": "r = 1.0-abs(atan(mod(float(i),3.0)*127.0)/PI);g = 1.0-abs(atan(mod(float(i)/3.0,3.0)*127.0)/PI);b = 1.0-abs(atan(mod(float(i)/9.0,3.0)*127.0)/PI*2.0);"
    },
    {
        "name": "gamma4",
        "value": "r = log(abs(sin(mod(float(i),3.0)*127.0)*1.7+1.0));g = log(abs(sin(mod(float(i)/3.0,3.0)*127.0)*1.7+1.0));b = log(abs(sin(mod(float(i)/9.0,3.0)*127.0)*1.7+1.0));"
    },
    {
        "name": "gamma5",
        "value": "r = (abs(sin(mod(float(i),3.0)*127.0*tx*ty)));g = (abs(sin(mod(float(i)/3.0,3.0)*127.0*tx*ty)));b = (abs(sin(mod(float(i)/9.0,3.0)*127.0*tx*ty)));"
    },
    {
        "name": "gamma6",
        "value": "r = abs(sin(pow(abs(mod(float(i*i),3.0)*127.0),abs(ty*tx))));g = abs(sin(pow(abs(mod(float(i*2*i)/3.0,3.0)*127.0),abs(ty*tx))));b = abs(sin(pow(abs(mod(float(i*3*i)/9.0,3.0)*127.0),abs(ty*tx))));"
    },
    {
        "name": "gamma7",
        "value": "r = abs(sin(float(i)*PI/255.0));g = abs(sin(float(i)*PI/255.0*2.0));b = abs(sin(float(i)*PI/255.0*3.0));"
    },
    {
        "name": "gamma8",
        "value": "r = abs(sin(float(i)*PI/255.0+tx+ty));g = abs(sin(float(i)*PI/255.0*2.0+tx+ty));b = abs(sin(float(i)*PI/255.0*3.0+tx+ty));"
    },
    {
        "name": "gamma9",
        "value": "r = abs(sin(float(i)*PI/255.0+tx*ty*float(i)));g = abs(sin(float(i)*PI/255.0*2.0+tx*ty*float(i)));b = abs(sin(float(i)*PI/255.0*3.0+tx*ty*float(i)));"
    },
    {
        "name": "gamma10",
        "value": "r = abs(((float(i))*127.0)/255.0*sin(tx+ty));g = abs(((float(i)/3.0)*127.0)/255.0*sin(tx));b = abs(((float(i)/9.0)*127.0)/255.0*sin(ty));"
    },
    {
        "name": "gamma11",
        "value": "r = abs(mod(float(i*i*i)*13.0*tx*ty,255.0)/255.0); g = abs(mod(float(i*i)*11.0*tx*ty,255.0)/255.0); b = abs(mod(float(i)*7.0*tx*ty,255.0)/255.0);"
    },
    {
        "name": "gamma12",
        "value": "r = 1.0-abs(log(float(i)*PI/255.0));g = 1.0-abs(log(float(i)*PI/255.0*2.0)); b = 1.0-abs(log(float(i)*PI/255.0*3.0));"
    },
    {
        "name": "gamma12.5",
        "value": "r = 1.0-abs(log(float(i)*12.0/255.0));g = 1.0-abs(log(float(i)*6.0/255.0)); b = 1.0-abs(log(float(i)*4.0/255.0));"
    },
    {
        "name": "gamma12.6",
        "value": "r = log(float(i)/4.0)/abs((exp(float(i*18)/255.0))); g = log(float(i)/8.0)/abs((exp(float(i*12)/255.0))); b = log(float(i)/12.0)/abs((exp(float(i*6)/255.0)));"
    },
    {
        "name": "gamma12.7",
        "value": "float j = float(i+1);r = log(j/8.0)/abs((j*2.0/300.0)*log(j*j*j+2.0)); g = log(j/6.5)/abs((j*3.0/300.0)*log(j*j*j+2.0)); b = log(j/9.5)/abs((j*2.0/300.0)*log(j*j*j+2.0));"
    },
    {
        "name": "gammaLite",
        "value": "r=abs(log(float(i)*PI/255.0));g=abs(log(float(i)*PI/255.0*2.0));b=abs(log(float(i)*PI/255.0*3.0));"
    },
    {
        "name": "gammaLite_2",
        "value": "r = 1.0-abs(log(float(i)*PI/255.0*tx));g = 1.0-abs(log(float(i)*PI/255.0*2.0*ty)); b = 1.0-abs(log(float(i)*PI/255.0*3.0*tx*ty));"
    },
    {
        "name": "gammaLite_3",
        "value": "r = 1.0-3.0/abs(log(float(i)/255.0*tx)); g = 1.0-3.0/abs(log(float(i)/255.0*ty)); b = 1.0-3.0/abs(log(float(i)/255.0*tx*ty));"
    },
    {
        "name": "gamma14",
        "value": "float r = 2.0*(tx-ty)*(tx-ty)+ty*ty+tx*tx; r = abs((float(i)/255.0))+mod(r+float(i)+r,sin(r)); g = abs((float(i)/255.0*2.0))+mod(float(i),sin(r));          b = abs((float(i)/255.0*3.0))+mod(r*float(i),sin(r));"
    },
    {
        "name": "gamma15",
        "value": "float r = mod(float(i),3.0)*85.0*sin(tx+ty)/255.0;float r1 = mod(float(i)/3.0,3.0)*85.0*sin(tx+ty)/255.0;float r2 = mod(float(i)/9.0,3.0)*85.0*sin(tx+ty)/255.0;r = abs(mod(float(i)*pow(abs(sin(tx+ty)),abs(sin(tx*ty*float(i)))),4.0)*64.0/255.0+r);g = abs(mod(float(i)*pow(abs(sin(tx+ty)),abs(sin(tx*ty*float(i))))/4.0,4.0)*64.0/255.0+r1);b = abs(mod(float(i)*pow(abs(sin(tx+ty)),abs(sin(tx*ty*float(i))))/16.0,4.0)*64.0/255.0+r2);"
    },
    {
        "name": "gamma16",
        "value": "if (float(i)<257.0) {r = 0.7*1.0/abs(log(abs(sin(float(5*i)/155.0))));g = 0.7*1.0/abs(log(abs(sin(float(2*i)/155.0))));b = 0.7*(1.0-1.0/abs(log(abs(sin(float(i*i)/155.0)))));} else{b = 1.0-fract(abs(log(float(i)/255.0)));r = 1.0-fract(abs(log(float(i)/255.0/3.0)));g = 1.0-fract(abs(log(float(i)/255.0/9.0)));};"
    },
    {
        "name": "gamma17",
        "value": "if (float(i)<50.0){r = 1.0-abs(log(float(i)/255.0+2.0));g = 1.0-abs(log(float(i)/255.0)+2.5);b = 1.0-abs(log(float(i)/255.0)+2.7);}else if (float(i)<200.0){r = abs(log(float(i)/255.0*1.3));g = abs(log(float(i)/255.0*2.0));b = abs(log(float(i)*3.0/255.0));}else {r = 1.0-abs(log(float(i)*1.3/255.0));g = 1.0-abs(log(float(i)*2.0/255.0));b = 1.0-abs(log(float(i)*2.7/255.0));};"
    },
    {
        "name": "gamma18",
        "value": "if (float(i)<50.0){r = abs(log(float(i)/255.0+2.0));g = abs(log(float(i)/255.0)+2.5);b = abs(log(float(i)/255.0)+2.7);}else if (float(i)<200.0){r = 1.0-abs(log(float(i)/255.0*1.3));g = 1.0-abs(log(float(i)/255.0*2.0));b = 1.0-abs(log(float(i)*3.0/255.0));}else {r = abs(log(float(i)*1.3/255.0));g = abs(log(float(i)*2.0/255.0));b = abs(log(float(i)*2.7/255.0));};"
    },
    {
        "name": "gamma19",
        "value": "if (float(i)<25.0){r = sin(abs(log(float(i*i)/255.0+2.0)));g = cos(abs(log(float(i*i)/255.0)+2.5));b = sin(abs(log(float(i*i)/255.0)+2.7));}else {r = 1.0-sin(abs(log(float(i)/255.0*1.3)));g = 1.0-sin(abs(log(float(i)/255.0*2.0)));b = 1.0-sin(abs(log(float(i)*3.0/255.0)));}"
    },
    {
        "name": "gamma20",
        "value": "float t = float(i); if (t<5.0){r = 0.6-sin(abs(log(abs(sin(t))*1.3)));g = 0.6-sin(abs(log(abs(sin(t))*2.0)));b = 0.6-sin(abs(log(abs(sin(t))*3.0)));}else {r = 1.0-sin(abs(log(t/255.0*1.3)));g = 1.0-sin(abs(log(t/255.0*2.0)));b = 1.0-sin(abs(log(t*3.0/255.0)));}"
    },
    {
        "name": "gamma_3d",
        "value": "float p = x*x+y*y+z*z; r = 1.0-abs(x)/p;g = 1.0-abs(y)/p;b = 1.0-abs(z)/p;"
    },
    {
        "name": "gamma_3d_2",
        "value": "float p = tx*tx+ty*ty+z*z; r = 1.0-abs(x)/p;g = 1.0-abs(y)/p;b = 1.0-abs(z)/p;"
    },
    {
        "name": "gamma_3d_log",
        "value": "float p = x*x+y*y+z*z; r = 1.0/abs(log(abs(x)/p));g = 1.0/abs(log(abs(y)/p));b = 1.0/abs(log(abs(z)/p));"
    },
    {
        "name": "gamma_3d_log_2",
        "value": "float p = x*x+y*y+z*z; r = 1.0/abs(log(abs(tx)/p));g = 1.0/abs(log(abs(ty)/p));b = 1.0/abs(log(abs(z)/p));"
    },
    {
        "name": "gamma_rnd",
        "value": "float rnd = 1.0 - float(i*i) / 10737.0; if(rnd < 0.5) {r = 1.0/1.50*rnd; g = 1.0/1.5;b = 1.0/1.5;} else if(rnd > 0.5 && rnd<0.75) {r = 1.0/2.0; g = 1.0/2.0*rnd;b = 1.0/2.0;}else if(rnd>0.75) {r = 1.0/4.0;g = 1.0/4.0; b = 1.0/4.0*rnd;}"
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