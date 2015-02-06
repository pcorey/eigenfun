function mbrot(z, c)
    return z^2 + c
end

function stats(z, c, n)
    for n = 1:n
        z = mbrot(z, c)
        e = eig([real(z) -imag(z);
                 imag(z)  real(z)])
        println(e)
    end
end


z = 0 + 0im;
c = 0.1 + 0.1im;

# print(mbrot(mbrot(z, c), c));
stats(z, c, 3)