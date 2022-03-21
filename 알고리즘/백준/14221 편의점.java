import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static final int INF = (int) 1e9; // 왜 무한을 의미하는 값으로 10억을 설정하는지
    public static int n, m;
    public static ArrayList<ArrayList<Node>> graph = new ArrayList<ArrayList<Node>>();
    public static boolean[] visited;
    public static int[] shortestTable;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        for(int i = 0; i < n+1; i++) {
            graph.add(new ArrayList<>());
        }
        for(int i = 0; i < m; i++) {
            int from = sc.nextInt();
            int to = sc.nextInt();
            int distance = sc.nextInt();
            graph.get(from).add(new Node(to, distance));
        }
        int p = sc.nextInt();
        int q = sc.nextInt();
        int[] house = new int[p];
        int[] store = new int[q];
        for(int i = 0; i < p; i++) {
            house[i] = sc.nextInt();
        }
        for(int i = 0; i < q; i++) {
            store[i] = sc.nextInt();
        }
        sc.close();
        int min = INF;
        int answer = 0;
        Arrays.sort(house);
        for(int i = 0; i < p; i++) {
            init();
            dijkstra(house[i]);
            for(int j = 0; j < q; j++) {
                if(shortestTable[store[j]] < min) {
                    min = shortestTable[store[j]];
                    answer = house[i];
                }
            }
        }
        System.out.println(answer);
    }

    static class Node {
        int index;
        int distance;

        public Node(int index, int distance) {
            this.index = index;
            this.distance = distance;
        }
    }

    public static void init() {
        visited = new boolean[5001];
        shortestTable = new int[5001];
        Arrays.fill(shortestTable, INF);
    }

    public static int getSmallestNode() {
        int min_value = INF;
        int index = 0;
        for(int i = 1; i <= n; i++) {
            if(shortestTable[i] < min_value && !visited[i]) {
                min_value = shortestTable[i];
                index = i;
            }
        }
        return index;
    }

    public static void dijkstra(int startNode) {
        shortestTable[startNode] = 0;
        visited[startNode] = true;
        for(int i = 0; i < graph.get(startNode).size(); i++) {
            shortestTable[graph.get(startNode).get(i).index] = graph.get(startNode).get(i).distance;
        }
        for(int i = 0; i < n - 1; i++) {
            int smallestNode = getSmallestNode();
            visited[smallestNode] = true;
            for(int j = 0; j < graph.get(smallestNode).size(); j++) {
                int distance = shortestTable[smallestNode] + graph.get(smallestNode).get(j).distance;
                if(distance < shortestTable[graph.get(smallestNode).get(j).index]) {
                    shortestTable[graph.get(smallestNode).get(j).index] = distance;
                }
            }
        }
    }
}
