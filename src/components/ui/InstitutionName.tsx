import Image from 'next/image';

export default function InstitutionName({ name }: { name: string }) {
    const isZhejiangUniversity = /Zhejiang University|浙江大学/i.test(name);

    return (
        <>
            {isZhejiangUniversity && (
                <Image
                    src="/images/zju.png"
                    alt=""
                    width={18}
                    height={18}
                    className="institution-logo"
                />
            )}
            {name}
        </>
    );
}
