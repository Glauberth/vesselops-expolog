import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { ReactElement, cloneElement } from "react";

//Esse componente é pra fazer com que os links da
//sidebar fiquem com cor diferente quando estiverem ativos

//* Eu verifico se o href é igual ao inicio da uri (eu não pego o caminho todo da url se não
// eu não vou conseguir pegar as sub-uri)

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  exactHref?: boolean;
}

export function ActiveLink({
  children,
  exactHref = false,
  ...rest
}: ActiveLinkProps) {
  const asPath = usePathname();

  let isActive = false;

  if (exactHref && (asPath == rest.href || asPath == rest.as)) {
    isActive = true;
  }

  if (
    !exactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "cyan.500" : "gray.50",
      })}
    </Link>
  );
}
