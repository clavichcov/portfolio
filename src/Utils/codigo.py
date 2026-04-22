def clasificar_por_edad(edad):

    if edad<18:
        result= 0

    elif edad<=60:
        result=1
    else :
        result=2
    print (result)
    return result

clasificar_por_edad(25)
clasificar_por_edad(15)
clasificar_por_edad(70)

def clasificar_por_edad_2(edad):

    match edad:
        case _ if edad<18:
            print ("0")
            return 0
            
        case _ if edad<=60:
            print ("1")
            return 1
            
        case _ :
            print ("2")
            return 2
            

clasificar_por_edad_2(25)
clasificar_por_edad_2(15)
clasificar_por_edad_2(70)
    