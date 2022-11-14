import java.util.Properties;

public class Test {

    public static Properties printSystemProperties(){
        System.out.println("printing system properties using ");
        Properties p = System.getProperties();
        return p;


    }
    public static void main(String[] args ){
        System.out.println("Hello World");

        printSystemProperties();
    }
}